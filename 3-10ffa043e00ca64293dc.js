(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{159:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var i=a(0),A=a.n(i),n=a(1),r=a.n(n),o=a(34),c=a.n(o);a.d(t,"a",function(){return c.a});a(167);var s=A.a.createContext({}),l=function(e){return A.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):A.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},162:function(e,t,a){"use strict";var i=a(158).c.p.withConfig({displayName:"Text",componentId:"sc-7wtlr4-0"})(["max-width:500px;margin:",";font-size:",";font-weight:100;font-family:'Montserrat';color:",";z-index:100;position:relative;padding:0 1rem;@media (min-width:768px){font-size:",";padding:0;}@media (min-width:1024px){font-size:",";padding:0;}"],function(e){return e.isWhite?"2rem auto":""},function(e){return e.isSmall?".75rem":".9rem"},function(e){return e.isWhite?function(e){return e.theme.colors.white}:function(e){return e.theme.colors.darkBlue}},function(e){return e.isSmall?".8rem":"1rem"},function(e){return e.isSmall?"1rem":"1.25rem"});t.a=i},163:function(e,t,a){"use strict";var i=a(158).c.p.withConfig({displayName:"Wrapper",componentId:"sc-18dheh0-0"})(["max-width:950px;margin:auto;text-align:center;margin:25px auto;display:flex;flex-wrap:wrap;justify-content:center;@media (min-width:768px){margin:6% auto;padding:0 2rem;}@media (min-width:1280px){padding:0;}"]);t.a=i},164:function(e,t,a){"use strict";var i=a(168),A=a(158),n=Object(A.c)(i.a).withConfig({displayName:"H1",componentId:"sc-1wpd2ni-0"})(["font-size:2rem;color:",";font-weight:400;z-index:100;position:relative;padding:0 1rem;width:100%;@media (min-width:600px){font-size:3.5rem;padding:0;}"],function(e){return e.isWhite?function(e){return e.theme.colors.white}:function(e){return e.theme.colors.darkBlue}});t.a=n},165:function(e,t,a){"use strict";var i=a(158).c.h3.withConfig({displayName:"H3",componentId:"bu7fxv-0"})(["font-family:'Montserrat';font-size:.8rem;text-transform:uppercase;color:",";font-weight:100;margin:0;padding:0 1rem;width:100%;@media (min-width:600px){padding:0;font-size:1rem;}"],function(e){return e.isWhite?function(e){return e.theme.colors.white}:function(e){return e.theme.colors.blue}});t.a=i},166:function(e,t,a){"use strict";var i=a(9);t.__esModule=!0,t.default=void 0;var A,n=i(a(8)),r=i(a(35)),o=i(a(81)),c=i(a(82)),s=i(a(0)),l=i(a(1)),u=function(e){var t=(0,c.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},d={},m=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return d[a]||!1},w=[];var f=function(e,t){(void 0===A&&"undefined"!=typeof window&&window.IntersectionObserver&&(A=new window.IntersectionObserver(function(e){e.forEach(function(e){w.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(A.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),A).observe(e),w.push([e,t])},p=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",A=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",s=e.opacity?e.opacity:"1";return"<picture>"+i+A+"<img "+o+c+t+r+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+s+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},M=s.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,A=e.onError,n=(0,o.default)(e,["style","onLoad","onError"]);return s.default.createElement("img",(0,c.default)({},n,{onLoad:i,onError:A,ref:t,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});M.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var j=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,A=!1,n=t.fadeIn,o=m(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,A=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,A=!1);var c=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:A,fadeIn:n,hasNoScript:c,seenBefore:o},a.imageRef=s.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)((0,r.default)(a))),a.handleRef=a.handleRef.bind((0,r.default)((0,r.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&f(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,d[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,A=e.style,n=void 0===A?{}:A,r=e.imgStyle,o=void 0===r?{}:r,l=e.placeholderStyle,d=void 0===l?{}:l,m=e.placeholderClassName,w=e.fluid,f=e.fixed,j=e.backgroundColor,L=e.Tag,h=e.itemProp,g="boolean"==typeof j?"lightgray":j,E=(0,c.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,d),y=(0,c.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),N={title:t,alt:this.state.isVisible?"":a,style:E,className:m};if(w){var C=w;return s.default.createElement(L,{className:(i||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(C.srcSet)},s.default.createElement(L,{style:{width:"100%",paddingBottom:100/C.aspectRatio+"%"}}),C.base64&&s.default.createElement(M,(0,c.default)({src:C.base64},N)),C.tracedSVG&&s.default.createElement(M,(0,c.default)({src:C.tracedSVG},N)),g&&s.default.createElement(L,{title:t,style:{backgroundColor:g,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&s.default.createElement("picture",null,C.srcSetWebp&&s.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),s.default.createElement("source",{srcSet:C.srcSet,sizes:C.sizes}),s.default.createElement(M,{alt:a,title:t,src:C.src,style:y,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:h})),this.state.hasNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:p((0,c.default)({alt:a,title:t},C))}}))}if(f){var x=f,b=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},n);return"inherit"===n.display&&delete b.display,s.default.createElement(L,{className:(i||"")+" gatsby-image-wrapper",style:b,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},x.base64&&s.default.createElement(M,(0,c.default)({src:x.base64},N)),x.tracedSVG&&s.default.createElement(M,(0,c.default)({src:x.tracedSVG},N)),g&&s.default.createElement(L,{title:t,style:{backgroundColor:g,width:x.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:x.height}}),this.state.isVisible&&s.default.createElement("picture",null,x.srcSetWebp&&s.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),s.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),s.default.createElement(M,{alt:a,title:t,width:x.width,height:x.height,src:x.src,style:y,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:h})),this.state.hasNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:p((0,c.default)({alt:a,title:t,width:x.width,height:x.height},x))}}))}return null},t}(s.default.Component);j.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var L=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string}),h=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string});j.propTypes={resolutions:L,sizes:h,fixed:L,fluid:h,fadeIn:l.default.bool,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string};var g=j;t.default=g},167:function(e,t,a){var i;e.exports=(i=a(172))&&i.default||i},168:function(e,t,a){"use strict";var i=a(170),A=a.n(i),n=a(171),r=a.n(n),o=a(158).c.div.withConfig({displayName:"playFair__PlayFair",componentId:"niwt2h-0"})(["@font-face{font-family:'playfair_displaybold';src:url(",") format('woff2'),url(",") format('woff');font-weight:normal;font-style:normal;}font-family:'playfair_displaybold';-webkit-font-smooth:antialiased;-moz-font-smooth:antialiased;"],A.a,r.a);t.a=o},169:function(e,t,a){"use strict";var i=a(175),A=a(0),n=a.n(A),r=a(1),o=a.n(r),c=a(186),s=a.n(c),l=a(159);function u(e){var t=e.description,a=e.lang,A=e.meta,r=e.keywords,o=e.title;return n.a.createElement(l.b,{query:d,render:function(e){var i=t||e.site.siteMetadata.description;return n.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:o},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:i}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(A)})},data:i})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var d="1025518380"},170:function(e,t,a){e.exports=a.p+"static/playfairdisplay-bold-webfont-8980b08142fb9e452bf6a42cedce60e0.woff2"},171:function(e,t,a){e.exports=a.p+"static/playfairdisplay-bold-webfont-c55ac1668658c246046cfdac50afce40.woff"},172:function(e,t,a){"use strict";a.r(t);a(26);var i=a(0),A=a.n(i),n=a(1),r=a.n(n),o=a(59),c=a(3),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return A.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=s},173:function(e,t,a){"use strict";var i=a(168),A=a(158),n=Object(A.c)(i.a).withConfig({displayName:"H2",componentId:"sc-10x6ii1-0"})(["font-size:",";color:",";font-weight:400;padding:0 1rem;width:100%;@media (min-width:600px){padding:0;}@media (min-width:1440px){font-size:",";}"],function(e){return e.isSmall?"1.25rem":"1.75rem"},function(e){return e.isWhite?function(e){return e.theme.colors.white}:function(e){return e.theme.colors.darkBlue}},function(e){return e.isSmall?"1.5rem":"2rem"});t.a=n},174:function(e,t,a){e.exports=a.p+"static/prosfera_services-cdb39d1ab2ec655e74361f8448b53d4e.jpg"},175:function(e){e.exports={data:{site:{siteMetadata:{title:"Prosfera",description:"Private page of construction company",author:"@bartekCis"}}}}},179:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAb32KIMH/8QAGhAAAwADAQAAAAAAAAAAAAAAAAECAwQQEv/aAAgBAQABBQK9ZUY1anyhD5//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAaEAABBQEAAAAAAAAAAAAAAAAAAQIRICEx/9oACAEBAAY/ApZikPTTlP/EABoQAAICAwAAAAAAAAAAAAAAAAABESExQVH/2gAIAQEAAT8h7l3GzCEcJ9RJoYjWSf/aAAwDAQACAAMAAAAQkw//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAbEAEAAgMBAQAAAAAAAAAAAAABACERMVFBkf/aAAgBAQABPxAQJG3tX2XA5ZRfBeu4BFR9rUcqo4xxWp//2Q==",aspectRatio:1.5723270440251573,src:"/Prosfera/static/cdb39d1ab2ec655e74361f8448b53d4e/57272/prosfera_services.jpg",srcSet:"/Prosfera/static/cdb39d1ab2ec655e74361f8448b53d4e/5d76c/prosfera_services.jpg 125w,\n/Prosfera/static/cdb39d1ab2ec655e74361f8448b53d4e/3f80d/prosfera_services.jpg 250w,\n/Prosfera/static/cdb39d1ab2ec655e74361f8448b53d4e/57272/prosfera_services.jpg 500w",sizes:"(max-width: 500px) 100vw, 500px"}}}}}},180:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iLTcwMyA5NSA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IC03MDMgOTUgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9DQo8L3N0eWxlPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMjUwLDQ1Ni4zYy0yLjgtMS4yLTYtMC41LTguMiwxLjZsLTgyLjEsODIuMWMtMi4xLDIuMS0yLjgsNS40LTEuNiw4LjJjMS4yLDIuOCwzLjksNC42LDYuOSw0LjZoODIuMQ0KCQkJYzQuMiwwLDcuNS0zLjQsNy41LTcuNXYtODIuMUMtMjQ1LjMsNDYwLjItMjQ3LjIsNDU3LjUtMjUwLDQ1Ni4zeiBNLTMxNi44LDUzNy45bDU2LjUtNTYuNXY1Ni41SC0zMTYuOHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTS0xOTUuNiwzMzUuOWMtMi44LTEuMi02LTAuNS04LjIsMS42bC0yMi41LDIyLjVWMjA3YzAtNC4yLTMuNC03LjUtNy41LTcuNWgtNTcuN2wyMS0yMWMwLDAsMCwwLDAsMA0KCQkJbDIwLjItMjAuMmM0LjMtNC4zLDYuNy0xMC4xLDYuNy0xNi4ycy0yLjQtMTEuOS02LjctMTYuMmwtMjMuNC0yMy40Yy00LjMtNC4zLTEwLjEtNi43LTE2LjItNi43cy0xMS45LDIuNC0xNi4yLDYuN2wtMjAuMiwyMC4yDQoJCQlsLTI0LjQsMjQuNGwtNTIuMyw1Mi4zaC0yMzMuM3YtNzQuM2MwLTQuMi0zLjQtNy41LTcuNS03LjVjLTMyLjYsMC01OS4xLDI2LjUtNTkuMSw1OS4xdjMxOS4yYzAsMC42LDAuMSwxLjEsMC4yLDEuNg0KCQkJYzEsMTMuOCw3LDI2LjcsMTcsMzYuNGMxMC43LDEwLjQsMjQuOCwxNi4yLDM5LjcsMTYuMmgyMjkuNmwtNDMuMiw0My4yYy0yLjEsMi4yLTIuOCw1LjQtMS42LDguMmMxLjIsMi44LDMuOSw0LjYsNi45LDQuNmgyNTUuOQ0KCQkJYzQuMSwwLDcuNS0zLjQsNy41LTcuNVYzNDIuOEMtMTkxLDMzOS44LTE5Mi44LDMzNy0xOTUuNiwzMzUuOXogTS0yOTUuNiwxMTMuMmMzLjEtMy4xLDguMS0zLjEsMTEuMSwwbDIzLjQsMjMuNA0KCQkJYzMuMSwzLjEsMy4xLDguMSwwLDExLjFsLTE0LjksMTQuOWwtMzQuNS0zNC41TC0yOTUuNiwxMTMuMnogTS0zMjEuMSwxMzguN2wzNC41LDM0LjVsLTEzLjgsMTMuOGwtMzQuNS0zNC41TC0zMjEuMSwxMzguN3oNCgkJCSBNLTIwNiw0MjcuM2gtMTMuOWMtNC4yLDAtNy41LDMuNC03LjUsNy41czMuNCw3LjUsNy41LDcuNWgxMy45djIyLjZoLTEzLjljLTQuMiwwLTcuNSwzLjQtNy41LDcuNXMzLjQsNy41LDcuNSw3LjVoMTMuOXYyMi42DQoJCQloLTEzLjljLTQuMiwwLTcuNSwzLjQtNy41LDcuNXMzLjQsNy41LDcuNSw3LjVoMTMuOXYyMi42aC0xMy45Yy00LjIsMC03LjUsMy40LTcuNSw3LjVjMCw0LjIsMy40LDcuNSw3LjUsNy41aDEzLjl2MzUuOGgtMjMwLjINCgkJCWw3NS45LTc1LjljMi45LTIuOSwyLjktNy43LDAtMTAuNmMtMC4zLTAuMy0wLjctMC42LTEuMS0wLjljLTIuOS0yLTctMS43LTkuNiwwLjlsLTMwLjUsMzAuNWgtMjQ0LjdjLTIyLjgsMC00MS4xLTE3LjgtNDEuOS00MC41DQoJCQljMC0xLjQsMC4yLTIuOCwwLjMtNC4yYzAsMCwwLDAsMCwwYzAuMS0wLjcsMC4yLTEuMywwLjMtMmMwLTAuMSwwLTAuMSwwLTAuMmMwLjEtMC42LDAuMi0xLjIsMC40LTEuOGMwLTAuMiwwLjEtMC4zLDAuMS0wLjUNCgkJCWMwLjEtMC41LDAuMi0xLDAuNC0xLjVjMC4xLTAuMywwLjEtMC41LDAuMi0wLjhjMC4xLTAuNCwwLjItMC44LDAuMy0xLjFjMC4xLTAuNCwwLjItMC44LDAuNC0xLjFjMC4xLTAuMywwLjItMC41LDAuMy0wLjgNCgkJCWMwLjItMC41LDAuNC0xLDAuNi0xLjVjMC4xLTAuMSwwLjEtMC4zLDAuMi0wLjRjMC4zLTAuNiwwLjUtMS4yLDAuOC0xLjhjMCwwLDAsMCwwLTAuMWM1LjktMTIuMiwxNy4yLTIxLjIsMzAuOC0yNA0KCQkJYzAsMCwwLjEsMCwwLjEsMGMwLjYtMC4xLDEuMi0wLjIsMS45LTAuM2MwLjEsMCwwLjIsMCwwLjMtMC4xYzAuNi0wLjEsMS4xLTAuMiwxLjctMC4yYzAuMiwwLDAuMywwLDAuNS0wLjENCgkJCWMwLjYtMC4xLDEuMS0wLjEsMS43LTAuMWMwLjIsMCwwLjQsMCwwLjUsMGMwLjcsMCwxLjUtMC4xLDIuMi0wLjFjNC4yLDAsNy41LTMuNCw3LjUtNy41di01NC41YzAtNC4yLTMuNC03LjUtNy41LTcuNQ0KCQkJYy00LjEsMC03LjUsMy40LTcuNSw3LjV2NDcuNGMtMTIuNywxLjYtMjQuNSw3LjMtMzMuOCwxNi4zYy0xLDEtMS45LDEuOS0yLjgsM1YxNzYuN2MwLTIxLjcsMTUuOC0zOS45LDM2LjYtNDMuNFYyMDd2MTUyLjh2MA0KCQkJYzAsNC4xLDMuNCw3LjUsNy41LDcuNXM3LjUtMy40LDcuNS03LjV2MFYyMTQuNWgyMTguMmwtNDEuNSw0MS41Yy0yLjksMi45LTIuOSw3LjcsMCwxMC42YzIuOSwyLjksNy43LDIuOSwxMC42LDBsNTQuNC01NC40DQoJCQljMCwwLDAsMCwwLDBsNDkuMi00OS4ybDM0LjUsMzQuNWwtNCw0YzAsMCwwLDAsMCwwbC0xNTEuNSwxNTEuNWwtMzQuNS0zNC41bDI5LjktMjkuOWMyLjktMi45LDIuOS03LjcsMC0xMC42DQoJCQljLTIuOS0yLjktNy43LTIuOS0xMC42LDBsLTM1LjIsMzUuMmMtMC4yLDAuMi0wLjQsMC40LTAuNSwwLjZjLTAuMSwwLjEtMC4xLDAuMS0wLjIsMC4yYy0wLjEsMC4xLTAuMiwwLjMtMC4zLDAuNA0KCQkJYy0wLjEsMC4xLTAuMSwwLjItMC4yLDAuM2MtMC4xLDAuMS0wLjIsMC4zLTAuMiwwLjRjMCwwLjEtMC4xLDAuMi0wLjEsMC4zYy0wLjEsMC4xLTAuMSwwLjMtMC4yLDAuNGMwLDAuMSwwLDAuMS0wLjEsMC4yDQoJCQlsLTE0LjYsNDEuNWwtMTAsMjguM2MtMC4xLDAuNC0wLjIsMC44LTAuMywxLjFoLTI1Yy00LjIsMC03LjUsMy40LTcuNSw3LjVzMy40LDcuNSw3LjUsNy41aDIwOC4xYzQuMiwwLDcuNS0zLjQsNy41LTcuNQ0KCQkJcy0zLjQtNy41LTcuNS03LjVoLTE0OS4zbDQ1LjgtMTYuMmMwLDAsMC4xLDAsMC4xLDBjMC4yLTAuMSwwLjQtMC4xLDAuNS0wLjJjMC4xLDAsMC4xLTAuMSwwLjItMC4xYzAuMi0wLjEsMC40LTAuMiwwLjUtMC4zDQoJCQljMC4xLDAsMC4xLTAuMSwwLjItMC4xYzAuMi0wLjEsMC40LTAuMiwwLjUtMC40YzAsMCwwLjEtMC4xLDAuMS0wLjFjMC4yLTAuMiwwLjQtMC4zLDAuNi0wLjVsMTU0LjYtMTU0LjZoNjUuM1YzNzVsLTEwNy41LDEwNy41DQoJCQljLTIuOSwyLjktMi45LDcuNywwLDEwLjZjMC4yLDAuMiwwLjQsMC40LDAuNiwwLjVjMS40LDEuMSwzLjEsMS43LDQuNywxLjdzMy40LTAuNiw0LjctMS43YzAuMi0wLjIsMC40LTAuMywwLjYtMC41YzAsMCwwLDAsMCwwDQoJCQlMLTIwNiwzNjFWNDI3LjN6IE0tNDgwLjMsMzYwLjdsLTIxLjUsNy42bC0xNC4zLTE0LjNsNy42LTIxLjVMLTQ4MC4zLDM2MC43eiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K"},181:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAVABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUDBAb/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQD/2gAMAwEAAhADEAAAAafJA3u9SiqZHQF5CH//xAAaEAEAAgMBAAAAAAAAAAAAAAABAAIDERIh/9oACAEBAAEFAuzvBnbhpF3Ch1WzWp6tQm2f/8QAFxEBAAMAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPwFqa//EABcRAAMBAAAAAAAAAAAAAAAAAAABERD/2gAIAQIBAT8BRMp//8QAHBAAAQQDAQAAAAAAAAAAAAAAAQACETEhQVEQ/9oACAEBAAY/Ai3lnieXZjQUiijKbnSgHA8JFq1//8QAGxABAAIDAQEAAAAAAAAAAAAAAQARITFRQWH/2gAIAQEAAT8h8xXuo+JQVb9agEwhYygrKt7mSbWx2CnGjMNA9mhg1Hrn/9oADAMBAAIAAwAAABC48L3/xAAZEQABBQAAAAAAAAAAAAAAAAAAARARITH/2gAIAQMBAT8QWtIO/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERMVH/2gAIAQIBAT8Qp4V0WFH/xAAeEAEBAAICAgMAAAAAAAAAAAABEQAxIVFBYYGh8P/aAAgBAQABPxAY1CVCHVO1+sTl7EDYrF5h1ge4A8jpwH7ZrxX2YU2tVR+R+4wx1QUwwNeRjYWGrq+sWlbjrP/Z",aspectRatio:.946370176586004,src:"/Prosfera/static/2dc0e8c1e1f1e4339f918218c3345a8b/57272/prosfera-kanciak.jpg",srcSet:"/Prosfera/static/2dc0e8c1e1f1e4339f918218c3345a8b/5d76c/prosfera-kanciak.jpg 125w,\n/Prosfera/static/2dc0e8c1e1f1e4339f918218c3345a8b/3f80d/prosfera-kanciak.jpg 250w,\n/Prosfera/static/2dc0e8c1e1f1e4339f918218c3345a8b/57272/prosfera-kanciak.jpg 500w,\n/Prosfera/static/2dc0e8c1e1f1e4339f918218c3345a8b/07066/prosfera-kanciak.jpg 750w,\n/Prosfera/static/2dc0e8c1e1f1e4339f918218c3345a8b/4dd5f/prosfera-kanciak.jpg 1000w,\n/Prosfera/static/2dc0e8c1e1f1e4339f918218c3345a8b/b283f/prosfera-kanciak.jpg 1500w,\n/Prosfera/static/2dc0e8c1e1f1e4339f918218c3345a8b/f142a/prosfera-kanciak.jpg 2894w",sizes:"(max-width: 500px) 100vw, 500px"}}}}}},182:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAYABQDASIAAhEBAxEB/8QAGQABAQEAAwAAAAAAAAAAAAAAAAIDAQQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAffzrEewknEkthP/xAAZEAACAwEAAAAAAAAAAAAAAAAAAQIQMRL/2gAIAQEAAQUCOqYyODFn/8QAFREBAQAAAAAAAAAAAAAAAAAAASD/2gAIAQMBAT8BI//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABQQAQAAAAAAAAAAAAAAAAAAADD/2gAIAQEABj8CH//EABsQAAIDAAMAAAAAAAAAAAAAAAABECExEUFh/9oACAEBAAE/IR+WLBhb2Hm2N1F//9oADAMBAAIAAwAAABD4AL7/xAAWEQEBAQAAAAAAAAAAAAAAAAABEDH/2gAIAQMBAT8QA7Cf/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAQEf/aAAgBAgEBPxBeYxf/xAAaEAEBAQEBAQEAAAAAAAAAAAABEQAhQVEx/9oACAEBAAE/EMQoc2ZUMmaQY/d6eErT3Fiq54vjgCO78t//2Q==",aspectRatio:.8403361344537815,src:"/Prosfera/static/a2956b32c7a18c3236c1fae9c9f524d1/57272/prosfera_testimonials.jpg",srcSet:"/Prosfera/static/a2956b32c7a18c3236c1fae9c9f524d1/5d76c/prosfera_testimonials.jpg 125w,\n/Prosfera/static/a2956b32c7a18c3236c1fae9c9f524d1/3f80d/prosfera_testimonials.jpg 250w,\n/Prosfera/static/a2956b32c7a18c3236c1fae9c9f524d1/57272/prosfera_testimonials.jpg 500w",sizes:"(max-width: 500px) 100vw, 500px"}}}}}},183:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAIDBP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAG3WRAH/8QAGRAAAgMBAAAAAAAAAAAAAAAAAAMBBBEU/9oACAEBAAEFAuhsGPNsn//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAAEFAAAAAAAAAAAAAAAAAAACERJCQ//aAAgBAQAGPwKo8kmZ/8QAGRAAAgMBAAAAAAAAAAAAAAAAAAERIaEx/9oACAEBAAE/Ie9prIcNkVTo/9oADAMBAAIAAwAAABBzz//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/EEf/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8QFtb/xAAbEAEBAAIDAQAAAAAAAAAAAAABEQAhMaGx0f/aAAgBAQABPxCZVUBWb+YVW05MeYkBrJXd6z//2Q==",aspectRatio:3.2432432432432434,src:"/Prosfera/static/8b30053f0fc2444565e4ff7e2080de04/7c6aa/prosfera-warsaw.jpg",srcSet:"/Prosfera/static/8b30053f0fc2444565e4ff7e2080de04/719a4/prosfera-warsaw.jpg 480w,\n/Prosfera/static/8b30053f0fc2444565e4ff7e2080de04/307fd/prosfera-warsaw.jpg 960w,\n/Prosfera/static/8b30053f0fc2444565e4ff7e2080de04/7c6aa/prosfera-warsaw.jpg 1920w",sizes:"(max-width: 1920px) 100vw, 1920px"}}}}}},184:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABO0lEQVQoz4XSv0tCURjG8as0NBQOETi2tja2OUlTUFMuTS1NDUKt/QMNKhkNRUQNDS79A1IULUERbVGZ0A+zn5ZY5Ll933gu2IVbBz6co+c9j++5V8/3fS9qsJfAIHr1OWb1wZnIsyoads6NMo9jDgvYRhZT6OsM/S9wBo/yijbeUcakAvvDXXayQUM/BT3YwCGe8YFrhT/gDMsUdweBrOMKjofELHWCxTz2cYUnqaMJSpx9n2UeQJf316CwgD0sYg0HqKjLS7yhpR/ZQgrTekxjSGMEQ0hahxkWJ1jCLEqo4R5V9m8Uaq1WmVawijzWcYxTHNmeBe7qWW0ip24vFBpc/xNfeNF+kXNFBZdZ7yi4ble+05XsmufWFW71tlsKaosFNwio6ZEEtfYCG/bPsEAn4eFC66i6X2e+AQI4aD6QkJixAAAAAElFTkSuQmCC",aspectRatio:2.0991253644314867,src:"/Prosfera/static/de59264fa3611c1cf8db07d212f729c9/248ca/prosfera_cloud_1.png",srcSet:"/Prosfera/static/de59264fa3611c1cf8db07d212f729c9/5d26f/prosfera_cloud_1.png 480w,\n/Prosfera/static/de59264fa3611c1cf8db07d212f729c9/52b08/prosfera_cloud_1.png 960w,\n/Prosfera/static/de59264fa3611c1cf8db07d212f729c9/248ca/prosfera_cloud_1.png 1440w",sizes:"(max-width: 1440px) 100vw, 1440px"}}}}}},185:function(e,t,a){"use strict";var i=a(8),A=a.n(i),n=a(0),r=a.n(n),o=a(158),c=a(163),s=a(164),l=a(165),u=o.c.div.withConfig({displayName:"contact__WideColumn",componentId:"jh0gpd-0"})(["width:100%;margin-bottom:2rem;"]),d=function(e){function t(){return e.apply(this,arguments)||this}return A()(t,e),t.prototype.render=function(){return r.a.createElement(c.a,null,r.a.createElement(u,null,r.a.createElement(l.a,null,"Pytanie? Potrzebujesz wyceny?"),r.a.createElement(s.a,null,"Skontakutuj się z nami"),"FORMULARZ"))},t}(n.Component);t.a=d},190:function(e,t,a){"use strict";var i=a(8),A=a.n(i),n=a(0),r=a.n(n),o=a(158),c=(a(160),a(183)),s=a(159),l=a(166),u=a.n(l);a(161);var d=function(){return r.a.createElement(s.b,{query:"2155171856",render:function(e){return r.a.createElement(m,{fluid:e.placeholderImage.childImageSharp.fluid})},data:c})},m=Object(o.c)(u.a).withConfig({displayName:"warsawImage___StyledImg",componentId:"sc-1di1a91-0"})(["opacity:.5;"]),w=a(184);var f=function(){return r.a.createElement(s.b,{query:"363856626",render:function(e){return r.a.createElement(p,{fluid:e.placeholderImage.childImageSharp.fluid})},data:w})},p=Object(o.c)(u.a).withConfig({displayName:"cloudImage1___StyledImg",componentId:"qmbs9h-0"})(["opacity:.8;position:absolute !important;top:0;right:0;bottom:0;left:0;"]),M=o.c.div.withConfig({displayName:"sky__Container",componentId:"sc-26epkf-0"})(["margin-top:10rem;position:relative;perspective:10px;height:auto;overflow-y:auto;"]),j=function(e){function t(){return e.apply(this,arguments)||this}return A()(t,e),t.prototype.render=function(){return r.a.createElement(M,null,r.a.createElement(d,null),r.a.createElement(f,{id:"cloud1"}))},t}(n.Component);t.a=j},191:function(e,t,a){"use strict";var i=a(0),A=a.n(i),n=a(158),r=a(163),o=a(164),c=a(173),s=a(165),l=a(162),u=(a(160),a(181)),d=a(159),m=(a(161),a(166)),w=a.n(m);var f=function(){return A.a.createElement(d.b,{query:"3733276747",render:function(e){return A.a.createElement(p,{fluid:e.placeholderImage.childImageSharp.fluid})},data:u})},p=Object(n.c)(w.a).withConfig({displayName:"aboutImage___StyledImg",componentId:"b1rn1d-0"})(["box-shadow:0px 10px 40px 0px ",";"],function(e){return e.theme.colors.shadow}),M=a(182);var j=function(){return A.a.createElement(d.b,{query:"1850453916",render:function(e){return A.a.createElement(L,{fluid:e.placeholderImage.childImageSharp.fluid})},data:M})},L=Object(n.c)(w.a).withConfig({displayName:"testimonialsImage___StyledImg",componentId:"fa05y9-0"})(["width:100%;max-width:400px;height:500px;bottom:-50px;left:0px;position:absolute !important;z-index:-1;opacity:.4;"]),h=n.c.div.withConfig({displayName:"about__Column",componentId:"sc-1x4zn3y-0"})(["width:100%;padding:0 1rem 1rem;text-align:left;@media (min-width:600px){width:50%;padding:1rem;}"]),g=n.c.div.withConfig({displayName:"about__WideColumn",componentId:"sc-1x4zn3y-1"})(["width:100%;margin-bottom:2rem;"]),E=n.c.div.withConfig({displayName:"about__NarrowColumn",componentId:"sc-1x4zn3y-2"})(["width:100%;height:200px;box-shadow:0px 10px 30px 0px ",";margin:1rem;padding:2rem 0;display:flex;flex-direction:column;justify-content:space-between;background-color:",";p{font-size:1rem;}@media (min-width:600px){margin:2rem 1rem;width:45%;padding:2rem;}"],function(e){return e.theme.colors.shadow},function(e){return e.theme.colors.white}),y=n.c.div.withConfig({displayName:"about__Container",componentId:"sc-1x4zn3y-3"})(["position:relative;"]);t.a=function(){return A.a.createElement(y,null,A.a.createElement(j,null),A.a.createElement(r.a,null,A.a.createElement(g,null,A.a.createElement(s.a,null,"Nieco więcej o firmie"),A.a.createElement(o.a,null,"O nas")),A.a.createElement(h,null,A.a.createElement(l.a,null,"Prosfera jest rodzinną firmą. Pracujemy z instalacjami sanitarnymi juz od 10 lat."),A.a.createElement(l.a,null,"Pierwsze doświadczenia zdobywaliśmy przy budowie SkyTower we Wrocławiu. Ta wielka inwestycja pozowiła nam od samego początku zbudowac profesjonalne podejście do realizacji projektów."),A.a.createElement(l.a,null,"Od tamtego czasu ciągle doskonalimy swoje usługi i naszym priorytetem jest satysfakcja naszych klientów."),A.a.createElement(l.a,null,"Budowa długofalowych relacji jest dla Nas priorytetem.")),A.a.createElement(h,null,A.a.createElement(f,null),A.a.createElement(l.a,{isSmall:!0},"Kamil Kudyba. Właściciel Prosfery."))),A.a.createElement(r.a,null,A.a.createElement(g,null,A.a.createElement(s.a,null,"Co mówią o nas"),A.a.createElement(o.a,null,"Referencje")),A.a.createElement(E,null,A.a.createElement(l.a,{isSmall:!0},"Pracowałem z Kamilem juz wielokorotnie. Zawsze terminowy i mogłem na niego liczyc."),A.a.createElement(c.a,{isSmall:!0},"Jan Nowak, Probud")),A.a.createElement(E,null,A.a.createElement(l.a,{isSmall:!0},"Gdyby nie Prosfera moja inwestycja nie byłaby oddana w terminie. Uratowali mi wentylację"),A.a.createElement(c.a,{isSmall:!0},"Michał Wiśniewski, Warbud")),A.a.createElement(E,null,A.a.createElement(l.a,{isSmall:!0},"Super chłopaki. Polecam kazdemu."),A.a.createElement(c.a,{isSmall:!0},"Mateusz Kowal, Niebud")),A.a.createElement(E,null,A.a.createElement(l.a,{isSmall:!0},"Szybko. Profesjonalnie. Na czas i w budzecie. Czy mozna wymagac czegoś więcej?"),A.a.createElement(c.a,{isSmall:!0},"Grzegorz Jasny, WyBud"))))}},192:function(e,t,a){"use strict";var i=a(0),A=a.n(i),n=a(158),r=a(163),o=a(164),c=a(165),s=a(162),l=(a(160),a(179)),u=a(159),d=(a(161),a(166)),m=a.n(d);var w=function(){return A.a.createElement(u.b,{query:"1593011430",render:function(e){return A.a.createElement(f,{fluid:e.placeholderImage.childImageSharp.fluid})},data:l})},f=Object(n.c)(m.a).withConfig({displayName:"services___StyledImg",componentId:"hbkxlm-0"})(["box-shadow:0px 10px 40px 0px ",";"],function(e){return e.theme.colors.shadow}),p=n.c.div.withConfig({displayName:"services__Column",componentId:"sc-17mww68-0"})(["width:100%;padding:1rem;text-align:left;@media (min-width:768px){width:50%;}"]),M=n.c.div.withConfig({displayName:"services__WideColumn",componentId:"sc-17mww68-1"})(["width:100%;margin-bottom:2rem;"]);t.a=function(){return A.a.createElement(r.a,null,A.a.createElement(M,null,A.a.createElement(c.a,null,"Dowiedz się czym się zajmujemy"),A.a.createElement(o.a,null,"Oferowane usługi")),A.a.createElement(p,null,A.a.createElement(s.a,null,"Projektowanie Sytemów Wentylacji"),A.a.createElement(s.a,null,"Budowa Wentylacji wedłóg specyfikacji technicznej"),A.a.createElement(s.a,null,"Serwis Systemów Wentylacji"),A.a.createElement(s.a,null,"Budowa Instalacji p Pozarowch"),A.a.createElement(s.a,null,"Rekuperacja")),A.a.createElement(p,null,A.a.createElement(w,null)))}},193:function(e,t,a){"use strict";var i=a(158),A=a(160),n=a.n(A),r=a(0),o=a.n(r),c=(a(161),a(163)),s=a(164),l=a(173),u=a(165),d=a(162),m=a(159),w=Object(i.c)(m.a).withConfig({displayName:"ButtonLink",componentId:"sc-1ronqtm-0"})(["margin:auto;width:150px;border:1px solid ",";padding:1rem 2rem;font-family:'Montserrat';text-decoration:none;cursor:pointer;margin-top:2rem;font-weight:100;position:relative;transition:all .5s cubic-bezier(0.075,0.82,0.165,1);color:",";z-index:100;::before{content:'';position:absolute;width:100%;height:0%;background-color:",";bottom:0;left:0;transition:all .5s cubic-bezier(0.075,0.82,0.165,1);z-index:-1;}:hover{color:",";::before{height:100%;}}"],function(e){return e.isWhite?function(e){return e.theme.colors.white}:function(e){return e.theme.colors.darkBlue}},function(e){return e.isWhite?function(e){return e.theme.colors.white}:function(e){return e.theme.colors.darkBlue}},function(e){return e.isWhite?function(e){return e.theme.colors.white}:function(e){return e.theme.colors.darkBlue}},function(e){return e.isWhite?function(e){return e.theme.colors.darkBlue}:function(e){return e.theme.colors.white}}),f=a(180),p=a.n(f),M=a(174),j=a.n(M);function L(){var e=n()(["\n          background-image: url(",");\n          "]);return L=function(){return e},e}function h(){var e=n()(["\n          background-image: url(",");\n          "]);return h=function(){return e},e}function g(){var e=n()(["\n            background-image: url(",");\n        "]);return g=function(){return e},e}var E=i.c.div.withConfig({displayName:"portfolio__Description",componentId:"sc-140ezue-0"})(["height:auto;width:100%;text-align:center;@media (min-width:600px){width:70%;margin:2rem;}@media (min-width:768px){width:300px;margin:2rem;}@media (min-width:1024px){width:350px;}@media (min-width:1280px){width:250px;}@media (min-width:1440px){width:300px;margin:2rem 1rem;}@media (min-width:1500px){margin:2rem;}@media (min-width:1920px){width:350px;}"]),y=Object(i.c)(E).withConfig({displayName:"portfolio__Item",componentId:"sc-140ezue-1"})(["text-align:left;background-color:",";box-shadow:0px 10px 40px 0px ",";cursor:pointer;position:relative;overflow:hidden;margin:1rem 0;.image{background-repeat:no-repeat;background-position:center;background-size:cover;width:100%;height:150px;transition:all 1s cubic-bezier(0.075,0.82,0.165,1);@media (min-width:768px){height:200px;}@media (min-width:1280px){height:150px;}}.description{height:150px;padding:2rem 0;@media (min-width:600px){padding:2rem;}@media (min-width:768px){height:200px;}@media (min-width:1280px){padding:2rem 1rem;}}.extra{width:100%;height:20px;background-color:",";position:absolute;bottom:0;display:flex;align-items:center;justify-content:center;transition:all 1s cubic-bezier(0.075,0.82,0.165,1);color:",";font-family:'Montserrat';font-weight:100;::after{content:'Szczegóły inwestycji';opacity:0;transition:all .25s cubic-bezier(0.075,0.82,0.165,1);font-size:.8rem;@media (min-width:600px){font-size:1rem;}}}:hover{.image{transform:scale(1.05);}.extra{height:30px;@media (min-width:600px){height:60px;}::after{opacity:1;}}}"],function(e){return e.theme.colors.white},function(e){return e.theme.colors.shadow},function(e){return e.theme.colors.blue},function(e){return e.theme.colors.white}),N=i.c.div.withConfig({displayName:"portfolio__Container",componentId:"sc-140ezue-2"})(["position:relative;height:auto;width:100%;overflow:hidden;display:flex;flex-direction:column-reverse;flex-wrap:wrap;justify-content:center;align-items:center;padding:2rem 1rem;@media (min-width:768px){flex-direction:row;}@media (min-width:1024px){padding:2rem 0;}:before{content:'';position:absolute;background-color:",";width:100%;height:100%;left:0;z-index:-1;@media (min-width:600px){width:600px;}}"],function(e){return e.theme.colors.darkBlue}),C=i.c.div.withConfig({displayName:"portfolio__Icon",componentId:"sc-140ezue-3"})(["background-image:url(",");background-repeat:no-repeat;width:60px;height:60px;margin:3rem auto 0;@media (min-width:600px){margin:6rem auto 0;}@media (min-width:1280px){margin:0 auto;}"],p.a),x=i.c.div.withConfig({displayName:"portfolio__WideColumn",componentId:"sc-140ezue-4"})(["width:100%;margin-bottom:2rem;"]),b=(t.a=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,null,o.a.createElement(x,null,o.a.createElement(u.a,null,"Sprawdź"),o.a.createElement(s.a,null,"Wybrane Realizacje"))),o.a.createElement(N,null,o.a.createElement(E,null,o.a.createElement(C,null),o.a.createElement(d.a,{isWhite:!0},"Sprawdź więcej"),o.a.createElement(w,{to:"/realizacje",isWhite:!0},"Projektów")),o.a.createElement(y,null,o.a.createElement(b,{className:"image"}),o.a.createElement("div",{className:"description"},o.a.createElement(l.a,null,"Galeria Oława"),o.a.createElement(d.a,{isSmall:!0},"Nowe miejsce na mapie miasta")),o.a.createElement("div",{className:"extra"})),o.a.createElement(y,null,o.a.createElement(Q,{className:"image"}),o.a.createElement("div",{className:"description"},o.a.createElement(l.a,null,"Promenady"),o.a.createElement(d.a,{isSmall:!0},"Osiedle tętniące zyciem")),o.a.createElement("div",{className:"extra"})),o.a.createElement(y,null,o.a.createElement(S,{className:"image"}),o.a.createElement("div",{className:"description"},o.a.createElement(l.a,null,"Zaklęte Rewiry"),o.a.createElement(d.a,{isSmall:!0},"Miejsce dla nocnych Marków")),o.a.createElement("div",{className:"extra"}))))},Object(i.c)("div")(g(),j.a)),Q=Object(i.c)("div")(h(),j.a),S=Object(i.c)("div")(L(),j.a)},194:function(e,t,a){"use strict";var i=a(8),A=a.n(i),n=a(0),r=a.n(n),o=a(58),c=a(158),s=a(57),l=a(192),u=a(193),d=a(191),m=a(190),w=a(185),f=c.c.div.withConfig({displayName:"layout__Scroller",componentId:"ii2kc2-0"})(["display:block;margin:4rem 0;@media (min-width:600px){margin:8rem 0;}"]),p=function(e){function t(){return e.apply(this,arguments)||this}A()(t,e);var a=t.prototype;return a.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{id:"services"},r.a.createElement(l.a,null)),r.a.createElement(f,{id:"portfolio"},r.a.createElement(u.a,null)),r.a.createElement(f,{id:"about"},r.a.createElement(d.a,null)),r.a.createElement(f,null,r.a.createElement(m.a,null)),r.a.createElement(f,{id:"contact-form"},r.a.createElement(w.a,null)))},a.componentDidUpdate=function(){if(this.props.scrollState){var e=document.querySelector('div[id*="'+this.props.scrollState+'"]');window.scroll({top:e.offsetTop-100,behavior:"smooth"}),this.props.scrollTo("")}},t}(n.Component);t.a=Object(o.b)(function(e){return{scrollState:e.app.scrollState}},function(e){return{scrollTo:function(t){return e(Object(s.b)(t))}}})(p)}}]);
//# sourceMappingURL=3-10ffa043e00ca64293dc.js.map