from django.shortcuts import render

# JSON response 를 위한 import
from django.http import HttpResponse, JsonResponse
import json

from django.views.decorators.http import require_http_methods

# 크롤링에 필요한 import
from bs4 import BeautifulSoup
import urllib.request
import urllib.parse


# 뷰티풀수프를 통해 SK 머티리얼즈의 주식 정보를 가져오는 함수.
@require_http_methods(["GET"])
def crawling_data(request):
    print('잘 들온다')
    with urllib.request.urlopen('https://finance.naver.com/item/main.nhn?code=036490') as response:
        html = response.read()
        soup = BeautifulSoup(html, 'html.parser')
        # 가격 정보를 가져온다.
        price = str(soup.select_one(".th_cop_comp2 ~ td"))
        # 가격 정보에서 파싱을 통해 필요한 정보만을 가져온다.
        price = price.split("</td>")[0].split("<td>")[1]

        # 변화율 정보를 가져온다.
        change = str(soup.select(".th_cop_comp3 ~ td"))
        # 변화율이 상향인지 하향인지 확인
        change_sign = '▲' if change.split("</span>")[0].split("<span>")[1] == '상향' else '▼'
        # 변화량 파싱
        change = (change.split("</em>")[0].split("</span>")[1]).replace("\n", "").replace("\t", "")

        if request.GET.get("ajax", None):
            return JsonResponse({
                "price": price,
                "change_sign": change_sign,
                "change": change
            }, json_dumps_params={'ensure_ascii': True})
        else:
            return price, change_sign, change


# index 페이지를 rendering 하는 View
def sk_price_render(request):
    price, change_sign, change = crawling_data(request)

    return render(request, 'index/index.html',
                  {
                      "price": price,
                      "change_sign": change_sign,
                      "change": change
                  })
