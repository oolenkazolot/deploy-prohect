(()=>{"use strict";const t=new class{draw(){const t=document.querySelector("main");if(!t)return;t.textContent="";const e=document.createElement("h1");e.textContent="Привет",null==t||t.append(e)}},e=new class{draw(){const t=document.querySelector("main");if(!t)return;t.textContent="";const e=document.createElement("h1");e.textContent="404",null==t||t.append(e)}},n=new class{constructor(t,e){this.navigate=t=>{window.history.pushState(null,"",this.root+t),this.action(t)},this.routes=t,this.root="/",this.current=t[0],this.errorAction=e}init(){const t=window.location.pathname.replace("/","");this.action(t)}action(t){const e=this.routes.find((e=>e.path===t));e?e.cb():this.errorAction()}}([{path:"",cb:t.draw},{path:"cart",cb:()=>{alert("welcome to cart")}},{path:"products/:id",cb:()=>{alert("welcome to products")}}],e.draw);n.init();const c=document.createElement("a");c.addEventListener("click",(t=>{t.preventDefault(),n.navigate("cart")})),c.setAttribute("href","cart"),c.textContent="cart page";const r=document.createElement("a");r.addEventListener("click",(t=>{t.preventDefault(),n.navigate("")})),r.setAttribute("href",""),r.textContent="main page";const a=document.createElement("a");a.addEventListener("click",(t=>{t.preventDefault(),n.navigate("dcsd")})),a.setAttribute("href","dsfsd"),a.textContent="error page",document.body.append(c,r,a)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Im1CQWtEQSxNQzVDTUEsRUFBc0IsSUNONUIsTUFDU0MsT0FDTCxNQUFNQyxFQUFrQ0MsU0FBU0MsY0FBYyxRQUMvRCxJQUFLRixFQUNILE9BRUZBLEVBQVlHLFlBQWMsR0FDMUIsTUFBTUMsRUFBcUJILFNBQVNJLGNBQWMsTUFDbERELEVBQU1ELFlBQWMsU0FDcEJILFNBQUFBLEVBQWFNLE9BQU9GLEVBQ3RCLEdESElHLEVBQXdCLElFUDlCLE1BQ1NSLE9BQ0wsTUFBTUMsRUFBa0NDLFNBQVNDLGNBQWMsUUFDL0QsSUFBS0YsRUFDSCxPQUVGQSxFQUFZRyxZQUFjLEdBRzFCLE1BQU1DLEVBQXFCSCxTQUFTSSxjQUFjLE1BQ2xERCxFQUFNRCxZQUFjLE1BQ3BCSCxTQUFBQSxFQUFhTSxPQUFPRixFQUN0QixHRmdCSUksRUFBUyxJRDFCZixNQU1FQyxZQUFZQyxFQUFpQkMsR0FPdEIsS0FBQUMsU0FBWUMsSUFDakJDLE9BQU9DLFFBQVFDLFVBQVUsS0FBTSxHQUFJQyxLQUFLQyxLQUFPTCxHQUMvQ0ksS0FBS0UsT0FBT04sRUFBSyxFQVJqQkksS0FBS1AsT0FBU0EsRUFDZE8sS0FBS0MsS0FBTyxJQUNaRCxLQUFLRyxRQUFVVixFQUFPLEdBQ3RCTyxLQUFLTixZQUFjQSxDQUNyQixDQU9PVSxPQUNMLE1BQU1SLEVBQWVDLE9BQU9RLFNBQVNDLFNBQVNDLFFBQVEsSUFBSyxJQUMzRFAsS0FBS0UsT0FBT04sRUFDZCxDQUVRTSxPQUFPTixHQUNiLE1BQU1PLEVBQTZCSCxLQUFLUCxPQUFPZSxNQUFNQyxHQUM1Q0EsRUFBS2IsT0FBU0EsSUFFbkJPLEVBQ0ZBLEVBQVFPLEtBRVJWLEtBQUtOLGFBRVQsR0N4QnFCLENBQ3JCLENBQ0VFLEtBQU0sR0FDTmMsR0FBSTdCLEVBQVNDLE1BRWYsQ0FDRWMsS0FBTSxPQUNOYyxHQUFJLEtBQ0ZDLE1BQU0sa0JBQWtCLEdBRzVCLENBQ0VmLEtBQU0sZUFDTmMsR0FBSSxLQUNGQyxNQUFNLHNCQUFzQixJQUlEckIsRUFBVVIsTUFDM0NTLEVBQU9hLE9BY1AsTUFBTVEsRUFBSTVCLFNBQVNJLGNBQWMsS0FDakN3QixFQUFFQyxpQkFBaUIsU0FBVUMsSUFDM0JBLEVBQUVDLGlCQUNGeEIsRUFBT0ksU0FBUyxPQUFPLElBRXpCaUIsRUFBRUksYUFBYSxPQUFRLFFBQ3ZCSixFQUFFMUIsWUFBYyxZQUNoQixNQUFNK0IsRUFBSWpDLFNBQVNJLGNBQWMsS0FDakM2QixFQUFFSixpQkFBaUIsU0FBVUMsSUFDM0JBLEVBQUVDLGlCQUNGeEIsRUFBT0ksU0FBUyxHQUFHLElBRXJCc0IsRUFBRUQsYUFBYSxPQUFRLElBQ3ZCQyxFQUFFL0IsWUFBYyxZQUNoQixNQUFNZ0MsRUFBSWxDLFNBQVNJLGNBQWMsS0FDakM4QixFQUFFTCxpQkFBaUIsU0FBVUMsSUFDM0JBLEVBQUVDLGlCQUNGeEIsRUFBT0ksU0FBUyxPQUFPLElBRXpCdUIsRUFBRUYsYUFBYSxPQUFRLFNBQ3ZCRSxFQUFFaEMsWUFBYyxhQUNoQkYsU0FBU21DLEtBQUs5QixPQUFPdUIsRUFBR0ssRUFBR0MsRSIsInNvdXJjZXMiOlsid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy91dGlscy9Sb3V0aW5nLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvcGFnZXMvbWFpbi50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvcGFnZXMvZXJyb3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJvdXQgfSBmcm9tIFwiLi4vdHlwZXMvaW5kZXhcIjtcclxuXHJcbmNsYXNzIFJvdXRlciB7XHJcbiAgcHJpdmF0ZSByb3V0ZXM6IElSb3V0W107XHJcbiAgcHJpdmF0ZSByb290OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBjdXJyZW50OiBJUm91dDtcclxuICBwcml2YXRlIGVycm9yQWN0aW9uOiAoKSA9PiB2b2lkO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihyb3V0ZXM6IElSb3V0W10sIGVycm9yQWN0aW9uOiAoKSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLnJvdXRlcyA9IHJvdXRlcztcclxuICAgIHRoaXMucm9vdCA9IFwiL1wiO1xyXG4gICAgdGhpcy5jdXJyZW50ID0gcm91dGVzWzBdO1xyXG4gICAgdGhpcy5lcnJvckFjdGlvbiA9IGVycm9yQWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5hdmlnYXRlID0gKHBhdGg6IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIFwiXCIsIHRoaXMucm9vdCArIHBhdGgpO1xyXG4gICAgdGhpcy5hY3Rpb24ocGF0aCk7XHJcbiAgfTtcclxuXHJcbiAgcHVibGljIGluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBwYXRoOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZShcIi9cIiwgXCJcIik7XHJcbiAgICB0aGlzLmFjdGlvbihwYXRoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWN0aW9uKHBhdGg6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgY3VycmVudDogSVJvdXQgfCB1bmRlZmluZWQgPSB0aGlzLnJvdXRlcy5maW5kKChyb3V0OiBJUm91dCkgPT4ge1xyXG4gICAgICByZXR1cm4gcm91dC5wYXRoID09PSBwYXRoO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoY3VycmVudCkge1xyXG4gICAgICBjdXJyZW50LmNiKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVycm9yQWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBnZXRGcmFnbWVudCA9ICgpID0+IHtcclxuICAvLyAgIGxldCBmcmFnbWVudCA9ICcnO1xyXG4gIC8vICAgaWYgKHRoaXMubW9kZSA9PT0gJ2hpc3RvcnknKSB7XHJcbiAgLy8gICAgIGZyYWdtZW50ID0gdGhpcy5jbGVhclNsYXNoZXMoZGVjb2RlVVJJKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpKTtcclxuICAvLyAgICAgZnJhZ21lbnQgPSBmcmFnbWVudC5yZXBsYWNlKC9cXD8oLiopJC8sICcnKTtcclxuICAvLyAgICAgZnJhZ21lbnQgPSB0aGlzLnJvb3QgIT09ICcvJyA/IGZyYWdtZW50LnJlcGxhY2UodGhpcy5yb290LCAnJykgOiBmcmFnbWVudDtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIGNvbnN0IG1hdGNoOiBzdHJpbmdbXSB8IG51bGwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5tYXRjaCgvIyguKikkLyk7XHJcbiAgLy8gICAgIGZyYWdtZW50ID0gbWF0Y2ggPyBtYXRjaFsxXSA6ICcnO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgcmV0dXJuIHRoaXMuY2xlYXJTbGFzaGVzKGZyYWdtZW50KTtcclxuICAvLyB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXI7XHJcbiIsImltcG9ydCBcIi4vc2Fzcy9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCIuL3V0aWxzL1JvdXRpbmdcIjtcbmltcG9ydCBNYWluUGFnZSBmcm9tIFwiLi9wYWdlcy9tYWluXCI7XG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gXCIuL3BhZ2VzL2Vycm9yXCI7XG5pbXBvcnQgeyBJTWFpblBhZ2UsIElFcnJvclBhZ2UsIElSb3V0IH0gZnJvbSBcIi4vdHlwZXMvaW5kZXhcIjtcblxuY29uc3QgbWFpblBhZ2U6IElNYWluUGFnZSA9IG5ldyBNYWluUGFnZSgpO1xuY29uc3QgZXJyb3JQYWdlOiBJRXJyb3JQYWdlID0gbmV3IEVycm9yUGFnZSgpO1xuXG4vL3JvdXRlciBzdGFydFxuY29uc3Qgcm91dHM6IElSb3V0W10gPSBbXG4gIHtcbiAgICBwYXRoOiBcIlwiLFxuICAgIGNiOiBtYWluUGFnZS5kcmF3LFxuICB9LFxuICB7XG4gICAgcGF0aDogXCJjYXJ0XCIsXG4gICAgY2I6ICgpID0+IHtcbiAgICAgIGFsZXJ0KFwid2VsY29tZSB0byBjYXJ0XCIpO1xuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcInByb2R1Y3RzLzppZFwiLFxuICAgIGNiOiAoKSA9PiB7XG4gICAgICBhbGVydChcIndlbGNvbWUgdG8gcHJvZHVjdHNcIik7XG4gICAgfSxcbiAgfSxcbl07XG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKHJvdXRzLCBlcnJvclBhZ2UuZHJhdyk7XG5yb3V0ZXIuaW5pdCgpO1xuLy8gcm91dGVyXG4vLyAgIC5hZGQoL2NhcnQvLCAoKTogdm9pZCA9PiB7XG4vLyAgICAgYWxlcnQoJ3dlbGNvbWUgaW4gY2FydCcpO1xuLy8gICB9KVxuLy8gICAuYWRkKC9wcm9kdWN0c1xcLyguKikvLCAoaWQ/OiBzdHJpbmcpOiB2b2lkID0+IHtcbi8vICAgICBhbGVydChgcHJvZHVjdHM6ICR7aWR9YCk7XG4vLyAgIH0pXG4vLyAgIC5hZGQoJycsICgpOiB2b2lkID0+IHtcbi8vICAgICBtYWluUGFnZS5kcmF3KCk7XG4vLyAgIH0pO1xuLy9yb3V0ZXIgZW5kXG5cbi8vINCU0LvRjyDQv9GA0LjQvNC10YDQsCDRgdC+0LfQtNCw0L3QuNGPINGB0YHRi9C70LrQuCDRgNC+0YPRgtC10YDQsFxuY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICByb3V0ZXIubmF2aWdhdGUoXCJjYXJ0XCIpO1xufSk7XG5hLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJjYXJ0XCIpO1xuYS50ZXh0Q29udGVudCA9IFwiY2FydCBwYWdlXCI7XG5jb25zdCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5iLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHJvdXRlci5uYXZpZ2F0ZShcIlwiKTtcbn0pO1xuYi5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiXCIpO1xuYi50ZXh0Q29udGVudCA9IFwibWFpbiBwYWdlXCI7XG5jb25zdCBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5jLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHJvdXRlci5uYXZpZ2F0ZShcImRjc2RcIik7XG59KTtcbmMuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImRzZnNkXCIpO1xuYy50ZXh0Q29udGVudCA9IFwiZXJyb3IgcGFnZVwiO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQoYSwgYiwgYyk7XG4iLCJjbGFzcyBNYWluUGFnZSB7XHJcbiAgcHVibGljIGRyYXcoKTogdm9pZCB7XHJcbiAgICBjb25zdCBtYWluRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgICBpZiAoIW1haW5FbGVtZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIG1haW5FbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIGNvbnN0IHRpdGxlOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCLQn9GA0LjQstC10YJcIjtcclxuICAgIG1haW5FbGVtZW50Py5hcHBlbmQodGl0bGUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpblBhZ2U7XHJcbiIsImNsYXNzIEVycm9yUGFnZSB7XHJcbiAgcHVibGljIGRyYXcoKTogdm9pZCB7XHJcbiAgICBjb25zdCBtYWluRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgICBpZiAoIW1haW5FbGVtZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIG1haW5FbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgICAvL3lvdXIgY29kZVxyXG4gICAgY29uc3QgdGl0bGU6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIjQwNFwiO1xyXG4gICAgbWFpbkVsZW1lbnQ/LmFwcGVuZCh0aXRsZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvclBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJtYWluUGFnZSIsImRyYXciLCJtYWluRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwidGl0bGUiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kIiwiZXJyb3JQYWdlIiwicm91dGVyIiwiY29uc3RydWN0b3IiLCJyb3V0ZXMiLCJlcnJvckFjdGlvbiIsIm5hdmlnYXRlIiwicGF0aCIsIndpbmRvdyIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJ0aGlzIiwicm9vdCIsImFjdGlvbiIsImN1cnJlbnQiLCJpbml0IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInJlcGxhY2UiLCJmaW5kIiwicm91dCIsImNiIiwiYWxlcnQiLCJhIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldEF0dHJpYnV0ZSIsImIiLCJjIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=