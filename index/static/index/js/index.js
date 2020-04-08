// index.html에 사용되는 Javascript Code.

// GLOBAL letIABLE AREA

	// 창 크기를 측정하는 변수 window_width
	let window_width = window.innerWidth;
	// 현재 디바이스의 상태를 구분하는 Status 변수
	let window_status = 0; // 0 = Desktop, 1 = Mobile

	// 만약 window_width가 450보다 작으면 Status를 모바일로 판단.
	if (window_width<=450) {
		window_status = 1;
	}

	// 슬라이드 번호 전역변수
	let slide_index = 0; // 0~3의 값을 가진다.

	// 햄버거 버튼 상태값 전역변수 : hamburger_click()
	let state_ham = 0; // 초기 상태 = 0 / 1회 클릭 시 1
// ========================================================= GLOBAL letIABLE AREA



// LOAD AREA

	window.addEventListener("load", function() {
	// Start of Desktop Area
		if (window_status === 0) { // 만약 모바일일 경우 아래 함수를 실행하지 않음.

			// Start of GNB Background On "MOUSE-OVER Event" Function
			    /*
			     * 익명함수 : #navigator 마우스 오버 시 이벤트 함수
			     * 기능 : #navigatoer 마우스 오버 시 .navbg의 크기를 160px
			     */
			    document.getElementById("navigator").onmouseover = function() {
			        // 변수에 클래스 저장
			        let navbg_tg = document.getElementsByClassName("navbg")[0];
			        // .navbg의 높이를 160px으로 설정
			        navbg_tg.style.height = "160px";
			        // .navbg의 애니메이션 트랜지션을 설정
			        navbg_tg.style.transition = "all .4s ease-out";
			    }; // END of Function
			// ==================== GNB Background On "MOUSE-OVER Event" Function


		    // Start of GNB Background "MOUSE-OUT Event" Function
			    /*
			     * 익명함수 : #navigator 마우스 아웃 시 이벤트 함수
			     * 기능 : #navigatoer 마우스 아웃 시 .navbg의 크기를 0px
			     */
			    document.getElementById("navigator").onmouseout = function() {
			        // 변수에 클래스 저장
			        let navbg_tg = document.getElementsByClassName("navbg")[0];
			        // .navbg의 높이를 0px로 설정
			        navbg_tg.style.height = "0px";
			    }; // END of Function
			// ======================== GNB Background "MOUSE-OUT Event" Function


			// Start of [products_hover] : Section 2 Product "MOUSE-OVER Event" Function
				function products_hover (event) {
					/*
					 * 함수명 : products_hover
					 * 조건 : .productTab 마우스 오버 시 발동되는 이벤트 함수
					 * 기능 : .productTab 마우스 오버 시 탭의 색이 변화하며 같은 클래스의 상세 내용의 z-index가 변하게 만드는 함수.
					 * 최종 작성일 : 2018-03-15
					 * 마지막 수정일 : 2018-03-15
					 */
					// 마우스 오버된 클래스 이외의 나머지 클래스의 css 변경
					for(let i=0; i<5; i++) {
						// 탭의 background-color을 #fff로 설정
						document.getElementsByClassName("prod"+(i+1))[0].style.backgroundColor = "#fff"
						// 탭의 color을 #333으로 설정
						document.getElementsByClassName("prod"+(i+1))[0].style.color = "#333"
						// 해당 클래스의 상세 내용의 z-index를 0으로 설정
						document.getElementsByClassName("prod"+(i+1))[1].style.zIndex = "0";
					} // END of For

					// 마우스 오버된 클래스의 css 변경
					// 탭의 background-color을 #f60로 설정
					document.getElementsByClassName(event.target.className)[0].style.backgroundColor = "#f60";
					// 탭의 color을 #fff으로 설정
					document.getElementsByClassName(event.target.className)[0].style.color = "#fff";
					// 해당 클래스의 상세 내용의 z-index를 100으로 설정
					document.getElementsByClassName(event.target.className)[1].style.zIndex = "100";

				} // END of products_hover



				// productTab 변수 선언
				let productTab = [];
				// productTab의 li a 요소를 변수에 모두 저장
				for(let i=0; i<5; i++) {
					productTab[i] = document.getElementsByClassName("prod"+(i+1))[0];
					// productTab에 EventListener 등록
					productTab[i].addEventListener('mouseover', products_hover, false);

				} // END of For
			// ================================================= [products_hover]

			// Start of [bulletbox] : Main Visual Bullet Button Click Area
				// .bulletBox a을 선택하는 변수
				let bulletbox = document.querySelectorAll(".bulletBox a");
				/*
			     * 익명함수 : #navigator 마우스 아웃 시 이벤트 함수
			     * 기능 : #navigatoer 마우스 아웃 시 .navbg의 크기를 0px
			     */
				bulletbox.item(0).onclick=function() {
					// 1번째 Bullet Button을 클릭한 경우
					bullet_click(0, 0);
					return false;
				};
				bulletbox.item(1).onclick=function() {
					// 2번째 Bullet Button을 클릭한 경우
					bullet_click(0, 1);
					return false;
				};
				bulletbox.item(2).onclick=function() {
					// 3번째 Bullet Button을 클릭한 경우
					bullet_click(0, 2);
					return false;
				};
				bulletbox.item(3).onclick=function() {
					// 4번째 Bullet Button을 클릭한 경우
					bullet_click(0, 3);
					return false;
				};
			// ====================================================== [bulletbox]

			bullet_auto(); // 오토 슬라이드 실행
		} // END of If
	// ============================================================= Desktop Area



	// Start of Mobile Area
		else if (window_status === 1) {
		// 만약 데스크탑일 경우 아래 함수를 실행하지 않음.
			// Start of [products_click] : Section 2 Product "MOUSE-CLICK Event" Function
				function products_click (event) {
					/*
					 * 함수명 : products_click
					 * 조건 : .productTab 터치 시 발동되는 이벤트 함수
					 * 기능 : .productTab 터치 시 탭의 색이 변화하며 같은 클래스의 이미지의 z-index가 변하게 만드는 함수.
					 * 최종 작성일 : 2018-03-20
					 * 마지막 수정일 : 2018-03-20
					 */
					// 마우스 오버된 클래스 이외의 나머지 클래스의 css 변경
					for(let i=0; i<5; i++) {
						// 탭의 background-color을 #fff로 설정
						document.getElementsByClassName("prod"+(i+1))[0].style.backgroundColor = "#fff"
						// 탭의 color을 #333으로 설정
						document.getElementsByClassName("prod"+(i+1))[0].style.color = "#333"
						// 해당 클래스의 상세 내용의 z-index를 0으로 설정
						document.getElementsByClassName("prod"+(i+1))[1].style.zIndex = "0";
					} // END of For

					// 마우스 오버된 클래스의 css 변경
					// 탭의 background-color을 #f60로 설정
					document.getElementsByClassName(event.target.className)[0].style.backgroundColor = "#f60";
					// 탭의 color을 #fff으로 설정
					document.getElementsByClassName(event.target.className)[0].style.color = "#fff";
					// 해당 클래스의 상세 내용의 z-index를 100으로 설정
					document.getElementsByClassName(event.target.className)[1].style.zIndex = "100";

				} // END of products_click



				// productTab 변수 선언
				let productTab = [];
				// productTab의 li a 요소를 변수에 모두 저장
				for(let i=0; i<5; i++) {
					productTab[i] = document.getElementsByClassName("prod"+(i+1))[0];
					// productTab에 EventListener 등록
					productTab[i].addEventListener('click', products_click, false);

				} // END of For
			// ================================================= [products_click]
		} // END of Else If
	// ============================================================== Mobile Area



	// Start of All Platform Area
		// 데스크탑, 모바일 모두 실행
	// ======================================================== All Platform Area

	});
// ==================================================================== LOAD AREA



// FUNCTION DECLARATIONS AREA

	// Start of [hamburger_click] : Hamburger "MOUSE-CLICK Event" Function
		function hamburger_click() {
			/*
			 * 함수명 : hamburger_click
			 * 조건 : #hamburger 클릭 시 발동되는 클릭 이벤트
			 * 기능 : 1회 클릭 시 사이드 메뉴가 나타나며 스크롤 고정. 1회 추가 클릭 시 사이드 메뉴가 사라지며 스크롤 고정 해제.
			 * 최종 작성일 : 2018-03-14
			 * 마지막 수정일 : 2018-03-14
			 */
		    if (state_ham === 0) {
		        // state_ham이 초기 상태일 때, 클릭 시 1회 클릭 상태로 변환
		        state_ham = 1;

		        // state_ham이 초기 상태일 때, 클릭 시 이미지를 Rotate 90
		        document.getElementById("hamButton").style.transform = "rotate(90deg)";
		        document.getElementById("hamButton").style.transition = "all .6s ease";

		        // 사이드 메뉴 등장
		        document.getElementsByClassName("topMenu")[0].style.right = "0px";
		        document.getElementById("navigator").style.right = "0px";

		        // 스크롤 중단
		        document.getElementsByTagName("body")[0].style.overflowY = "hidden";
		    } else if (state_ham === 1) {
		        // state_ham이 1회 클릭 상태일 때, 클릭 시 초기 상태로 변환
		        state_ham = 0;

		        // state_ham이 1회 클릭 상태일 때, 클릭 시 이미지를 Rotate 0
		        document.getElementById("hamButton").style.transform = "rotate(0deg)";

		        // 사이드 메뉴 숨김
		        document.getElementsByClassName("topMenu")[0].style.right = "-100%";
		        document.getElementById("navigator").style.right = "-100%";

		        // 스크롤 재개
		        document.getElementsByTagName("body")[0].style.overflowY = "scroll";
		    }
		}
	// ======================================================== [hamburger_click]



	// Start of [bullet_click] : Main Visual "MOUSE-CLICK Event" Function
		function bullet_click (status, sequence) {
			// Function Argument
			// sequence : 선택한 순서 (0부터 시작)
			// status : 0 - 수동 / 1 - 자동
			/*
			 * 함수명 : bullet_click
			 * 조건 : #mainVisual>bulletIcon 클릭 시 발동되는 클릭 이벤트
			 * 기능 : 클릭된 bullet Icon에 해당되는 이미지로 전환
			 * 최종 작성일 : 2018-03-19
			 * 마지막 수정일 : 2018-03-19
			 */

			 "use strict";

			// #slider>li를 선택
			let slider = document.querySelectorAll("#slider>li");
			// .bulletBox img를 선택
			let bullet = document.querySelectorAll(".bulletBox img");

			if(status===1) { // 자동의 경우
				slide_index++;
				if(slide_index>=4)
					slide_index = 0;
			} // END of If

			else { // 수동의 경우
				slide_index=sequence; // 순서값을 slide_index에 저장
				bullet_clear();
			} // END of Else

			// 자신을 포함한 mainVisual의 li, img 초기화
			for(let i=0; i<slider.length; i++) {
				// li의 class 초기화
				slider.item(i).setAttribute("class", "");
				// bullet 이미지 초기화
				bullet.item(i).setAttribute("src", "../../static/img/ico_pm_55_off.png");
			} // END of For

			// 선택된 li에 class 부여
			slider.item(slide_index).setAttribute("class", "opacityView");
			// 선택된 img의 src 변경
			bullet.item(slide_index).setAttribute("src", "../../static/img/ico_pm_55_on.png");

		} // END of Function
	// =========================================================== [bullet_click]



	// Start of [bullet_auto] : Main Visual "AUTO-SLIDE" Function
		let autocall_bullet="";
		function bullet_auto() {
			autocall_bullet=setInterval("bullet_click(1, 0)", 5000);
		}
	// ============================================================ [bullet_auto]



	// Start of [bullet_clear] : Main Visual "CLEAR-INTERVAL" Function
		let clear_bullet="";
		function bullet_clear() {
			"use strict";
			clearInterval(autocall_bullet);
			clearTimeout(clear_bullet);
			clear_bullet=setTimeout("bullet_auto()", 10000);
		}
	// =========================================================== [bullet_clear]


// ======================================================== FUNCTION DECLARATIONS
