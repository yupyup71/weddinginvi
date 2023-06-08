export function KakaoMapLocation() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          font: "normal normal 400 12px/normal dotum, sans-serif",
          width: "320px",
          height: "196px",
          color: "#333",
          position: "relative",
        }}
      >
        <div style={{ height: "180px" }}>
          <a
            href="https://map.kakao.com/?urlX=495132.0&amp;urlY=1130103.0&amp;itemId=8194086&amp;q=%EB%89%B4%EA%B5%AD%EC%A0%9C%ED%98%B8%ED%85%94&amp;srcid=8194086&amp;map_type=TYPE_MAP&amp;from=roughmap"
            target="_blank"
          >
            <img
              className="map"
              src="http://t1.daumcdn.net/roughmap/imgmap/19b9155db44667a520ec87ebcc5c0491c1dd601d721c7dd54ea1cc7bb4045775"
              width="320px"
              height="179px"
              style={{ border: "1px solid #ccc" }}
            />
          </a>
        </div>
        <div
          style={{
            overflow: "hidden",
            padding: "7px 11px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "0px 0px 2px 2px",
            backgroundColor: "rgb(249, 249, 249)",
          }}
        >
          <a
            href="https://map.kakao.com"
            target="_blank"
            style={{ float: "left" }}
          >
            <img
              src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
              width="72"
              height="16"
              alt="카카오맵"
              style={{ display: "block", width: "72px", height: "16px" }}
            />
          </a>
          <div
            style={{
              float: "right",
              position: "relative",
              top: "1px",
              fontSize: "11px",
            }}
          >
            <a
              target="_blank"
              href="https://map.kakao.com/?from=roughmap&amp;srcid=8194086&amp;confirmid=8194086&amp;q=%EB%89%B4%EA%B5%AD%EC%A0%9C%ED%98%B8%ED%85%94&amp;rv=on"
              style={{
                float: "left",
                height: "15px",
                paddingTop: "1px",
                lineHeight: "15px",
                color: "#000",
                textDecoration: "none",
              }}
            >
              로드뷰
            </a>

            <span
              style={{
                width: "1px",
                padding: "0",
                margin: "0 8px 0 9px",
                height: "11px",
                verticalAlign: "top",
                position: "relative",
                top: "2px",
                borderLeft: "1px solid #d0d0d0",
                float: "left",
              }}
            ></span>
            <a
              target="_blank"
              href="https://map.kakao.com/?from=roughmap&amp;eName=%EB%89%B4%EA%B5%AD%EC%A0%9C%ED%98%B8%ED%85%94&amp;eX=495132.0&amp;eY=1130103.0"
              style={{
                float: "left",
                height: "15px",
                paddingTop: "1px",
                lineHeight: "15px",
                color: "#000",
                textDecoration: "none",
              }}
            >
              길찾기
            </a>
            <span
              style={{
                width: "1px",
                padding: "0",
                margin: "0 8px 0 9px",
                height: "11px",
                verticalAlign: "top",
                position: "relative",
                top: "2px",
                borderLeft: "1px solid #d0d0d0",
                float: "left",
              }}
            ></span>
            <a
              target="_blank"
              href="https://map.kakao.com?map_type=TYPE_MAP&amp;from=roughmap&amp;srcid=8194086&amp;itemId=8194086&amp;q=%EB%89%B4%EA%B5%AD%EC%A0%9C%ED%98%B8%ED%85%94&amp;urlX=495132.0&amp;urlY=1130103.0"
              style={{
                float: "left",
                height: "15px",
                paddingTop: "1px",
                lineHeight: "15px",
                color: "#000",
                textDecoration: "none",
              }}
            >
              지도 크게 보기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
