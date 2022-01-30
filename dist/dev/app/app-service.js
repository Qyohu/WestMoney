(function(vue) {
  "use strict";
  function _interopNamespace(e) {
    if (e && e.__esModule)
      return e;
    var n = { __proto__: null, [Symbol.toStringTag]: "Module" };
    if (e) {
      Object.keys(e).forEach(function(k) {
        if (k !== "default") {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function() {
              return e[k];
            }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }
  var vue__namespace = /* @__PURE__ */ _interopNamespace(vue);
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      const count = vue.ref(5);
      const interval = setInterval(() => {
        count.value--;
        if (count.value <= 0) {
          uni.redirectTo({
            url: "/pages/eastmoney/index",
            success: () => {
              clearInterval(interval);
            }
          });
        }
      }, 1e3);
      const toIndex = () => {
        uni.redirectTo({
          url: "/pages/eastmoney/index"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("text", {
            class: "title",
            onClick: toIndex
          }, "Welcome"),
          vue.createElementVNode("div", {
            class: "count",
            onClick: toIndex
          }, "\u8DF3\u8FC7 " + vue.toDisplayString(count.value), 1)
        ]);
      };
    }
  });
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-1badc801"]]);
  var icons = {
    "about": "\uE772",
    "about-fill": "\uE771",
    "add": "\uE770",
    "add-fill": "\uE76F",
    "addmessage": "\uE76E",
    "addressbook": "\uE76D",
    "agree": "\uE76C",
    "agree-fill": "\uE76B",
    "alarm": "\uE76A",
    "alarm-fill": "\uE769",
    "alipay": "\uE768",
    "android": "\uE767",
    "applets": "\uE766",
    "arrowdown": "\uE765",
    "arrowleft": "\uE764",
    "arrowright": "\uE763",
    "arrowup": "\uE762",
    "attestation": "\uE761",
    "back": "\uE760",
    "bag": "\uE75F",
    "bag-fill": "\uE75E",
    "balloon": "\uE75D",
    "bankcard": "\uE75C",
    "bankcard-fill": "\uE75B",
    "bottom": "\uE75A",
    "calendar": "\uE759",
    "camera": "\uE758",
    "camera-fill": "\uE757",
    "camera-add": "\uE756",
    "card": "\uE755",
    "card-fill": "\uE754",
    "cart": "\uE753",
    "cart-fill": "\uE752",
    "category": "\uE751",
    "category-fill": "\uE750",
    "check": "\uE74F",
    "circle": "\uE74E",
    "circle-fill": "\uE74D",
    "circle-selected": "\uE74C",
    "clock": "\uE74B",
    "clock-fill": "\uE74A",
    "close": "\uE749",
    "close-fill": "\uE748",
    "community": "\uE747",
    "community-fill": "\uE746",
    "computer": "\uE745",
    "computer-fill": "\uE744",
    "coupon": "\uE743",
    "delete": "\uE742",
    "deletekey": "\uE741",
    "dingtalk": "\uE740",
    "dissatisfied": "\uE73F",
    "down": "\uE73E",
    "download": "\uE73D",
    "edit": "\uE73C",
    "ellipsis": "\uE73B",
    "enlarge": "\uE73A",
    "evaluate": "\uE739",
    "exchange": "\uE738",
    "explain": "\uE737",
    "explain-fill": "\uE736",
    "explore": "\uE735",
    "explore-fill": "\uE734",
    "eye": "\uE733",
    "feedback": "\uE732",
    "fingerprint": "\uE730",
    "friendadd": "\uE72F",
    "friendadd-fill": "\uE72E",
    "gps": "\uE72D",
    "histogram": "\uE72C",
    "home": "\uE72B",
    "home-fill": "\uE72A",
    "house": "\uE729",
    "imface": "\uE728",
    "imkeyboard": "\uE727",
    "immore": "\uE726",
    "imvoice": "\uE725",
    "ios": "\uE724",
    "kefu": "\uE723",
    "label": "\uE722",
    "label-fill": "\uE721",
    "like": "\uE720",
    "like-fill": "\uE71F",
    "link": "\uE71E",
    "listview": "\uE71D",
    "loading": "\uE71C",
    "location": "\uE71B",
    "mail": "\uE71A",
    "mail-fill": "\uE719",
    "manage": "\uE718",
    "manage-fill": "\uE717",
    "member": "\uE716",
    "member-fill": "\uE715",
    "message": "\uE714",
    "message-fill": "\uE713",
    "mobile": "\uE712",
    "moments": "\uE711",
    "more": "\uE710",
    "more-fill": "\uE70F",
    "narrow": "\uE70E",
    "news": "\uE70D",
    "news-fill": "\uE70C",
    "nodata": "\uE70B",
    "notice": "\uE699",
    "notice-fill": "\uE698",
    "offline": "\uE697",
    "offline-fill": "\uE696",
    "oppose": "\uE695",
    "oppose-fill": "\uE694",
    "order": "\uE693",
    "partake": "\uE692",
    "people": "\uE691",
    "people-fill": "\uE690",
    "pic": "\uE68F",
    "pic-fill": "\uE68E",
    "picture": "\uE68D",
    "pie": "\uE68C",
    "plus": "\uE689",
    "polygonal": "\uE688",
    "position": "\uE686",
    "pwd": "\uE685",
    "qq": "\uE684",
    "qrcode": "\uE682",
    "redpacket": "\uE681",
    "redpacket-fill": "\uE680",
    "reduce": "\uE67F",
    "refresh": "\uE67E",
    "revoke": "\uE67D",
    "satisfied": "\uE67C",
    "screen": "\uE67B",
    "search": "\uE67A",
    "search-2": "\uE679",
    "send": "\uE678",
    "service": "\uE677",
    "service-fill": "\uE676",
    "setup": "\uE675",
    "setup-fill": "\uE674",
    "share": "\uE673",
    "share-fill": "\uE672",
    "shield": "\uE671",
    "shop": "\uE670",
    "shop-fill": "\uE66F",
    "shut": "\uE66E",
    "signin": "\uE66D",
    "sina": "\uE66C",
    "skin": "\uE66B",
    "soso": "\uE669",
    "square": "\uE668",
    "square-fill": "\uE667",
    "square-selected": "\uE666",
    "star": "\uE665",
    "star-fill": "\uE664",
    "strategy": "\uE663",
    "sweep": "\uE662",
    "time": "\uE661",
    "time-fill": "\uE660",
    "todown": "\uE65F",
    "toleft": "\uE65E",
    "tool": "\uE65D",
    "top": "\uE65C",
    "toright": "\uE65B",
    "towardsleft": "\uE65A",
    "towardsright": "\uE659",
    "towardsright-fill": "\uE658",
    "transport": "\uE657",
    "transport-fill": "\uE656",
    "turningdown": "\uE654",
    "turningleft": "\uE653",
    "turningright": "\uE652",
    "turningup": "\uE651",
    "unreceive": "\uE650",
    "seen": "\uE7D2",
    "unseen": "\uE7D1",
    "up": "\uE64E",
    "upload": "\uE64C",
    "video": "\uE64B",
    "voice": "\uE649",
    "voice-fill": "\uE648",
    "voipphone": "\uE647",
    "wallet": "\uE646",
    "warning": "\uE645",
    "wealth": "\uE644",
    "wealth-fill": "\uE643",
    "weather": "\uE642",
    "wechat": "\uE641",
    "wifi": "\uE640",
    "play": "\uE7D5",
    "suspend": "\uE7D4"
  };
  const _sfc_main$a = {
    name: "tuiIcon",
    emits: ["click"],
    props: {
      name: {
        type: String,
        default: ""
      },
      size: {
        type: [Number, String],
        default: 32
      },
      unit: {
        type: String,
        default: "px"
      },
      color: {
        type: String,
        default: "#999"
      },
      bold: {
        type: Boolean,
        default: false
      },
      margin: {
        type: String,
        default: "0"
      },
      index: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        icons
      };
    },
    methods: {
      handleClick() {
        this.$emit("click", {
          index: this.index
        });
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("text", {
      class: vue.normalizeClass(["tui-icon-class tui-icon", "tui-icon-" + $props.name]),
      style: vue.normalizeStyle({ color: $props.color || "#999", fontSize: $props.size + $props.unit, fontWeight: $props.bold ? "bold" : "normal", margin: $props.margin }),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args))
    }, vue.toDisplayString($data.icons[$props.name]), 7);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$1], ["__scopeId", "data-v-0a9259bf"]]);
  Object.freeze({});
  Object.freeze([]);
  const isString = (val) => typeof val === "string";
  const objectToString = Object.prototype.toString;
  const toTypeString = (value) => objectToString.call(value);
  const toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  const ON_SHOW = "onShow";
  const ON_HIDE = "onHide";
  const ON_LAUNCH = "onLaunch";
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k, p) {
    switch (toRawType(p)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v) {
      const type2 = toTypeString(v).toLowerCase();
      if (type2 === "[object object]" || type2 === "[object array]") {
        try {
          v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e) {
          v = type2;
        }
      } else {
        if (v === null) {
          v = "---NULL---";
        } else if (v === void 0) {
          v = "---UNDEFINED---";
        } else {
          const vType = toRawType(v).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
          } else {
            v = String(v);
          }
        }
      }
      return v;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res = normalizeLog(type, filename, args);
    res && console[type](res);
  }
  function resolveEasycom(component, easycom) {
    return isString(component) ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  const onShow = /* @__PURE__ */ createHook(ON_SHOW);
  const onHide = /* @__PURE__ */ createHook(ON_HIDE);
  const onLaunch = /* @__PURE__ */ createHook(ON_LAUNCH);
  const _sfc_main$9 = {
    name: "tuiDrawer",
    emits: ["close"],
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      mask: {
        type: Boolean,
        default: true
      },
      maskClosable: {
        type: Boolean,
        default: true
      },
      mode: {
        type: String,
        default: "right"
      },
      zIndex: {
        type: [Number, String],
        default: 9999
      },
      maskZIndex: {
        type: [Number, String],
        default: 9998
      },
      backgroundColor: {
        type: String,
        default: "#fff"
      }
    },
    methods: {
      handleMaskClick() {
        if (!this.maskClosable) {
          return;
        }
        this.$emit("close", {});
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createCommentVNode(" @touchmove.stop.prevent "),
      vue.createElementVNode("view", null, [
        $props.mask ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: vue.normalizeClass(["tui-drawer-mask", { "tui-drawer-mask_show": $props.visible }]),
          style: vue.normalizeStyle({ zIndex: $props.maskZIndex }),
          onClick: _cache[0] || (_cache[0] = (...args) => $options.handleMaskClick && $options.handleMaskClick(...args))
        }, null, 6)) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["tui-drawer-container", [`tui-drawer-container_${$props.mode}`, $props.visible ? `tui-drawer-${$props.mode}__show` : ""]]),
          style: vue.normalizeStyle({ zIndex: $props.zIndex, backgroundColor: $props.backgroundColor })
        }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 6)
      ])
    ], 2112);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render], ["__scopeId", "data-v-0d91fa7f"]]);
  const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      const shareVisible = vue.ref(false);
      const shareList = vue.ref([
        {
          id: 1,
          type: "wechat",
          text: "\u5FAE\u4FE1",
          color: "#3FBF36"
        },
        {
          id: 2,
          type: "alipay",
          text: "\u652F\u4ED8\u5B9D",
          color: "#05B1FE"
        },
        {
          id: 3,
          type: "qq",
          text: "QQ",
          color: "#5283F0"
        },
        {
          id: 4,
          type: "android",
          text: "\u5176\u4ED6",
          color: "green"
        }
      ]);
      const closeDrawer = () => {
        shareVisible.value = false;
      };
      return (_ctx, _cache) => {
        const _component_tui_icon = resolveEasycom(vue.resolveDynamicComponent("tui-icon"), __easycom_0);
        const _component_dis = vue.resolveComponent("dis");
        const _component_tui_drawer = resolveEasycom(vue.resolveDynamicComponent("tui-drawer"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("view", { class: "ad-top" }, [
            vue.createElementVNode("img", {
              src: "/static/images/top.png",
              class: "ad-img"
            }),
            vue.createElementVNode("view", { class: "banner" }, [
              vue.createElementVNode("view", { class: "header-nav" }, [
                vue.createVNode(_component_tui_icon, {
                  name: "arrowleft",
                  class: "arrow-left",
                  size: 48,
                  unit: "rpx",
                  color: "white"
                }),
                vue.createVNode(_component_dis, {
                  class: "share",
                  onClick: _cache[0] || (_cache[0] = ($event) => shareVisible.value = true)
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("\u5206\u4EAB")
                  ]),
                  _: 1
                })
              ]),
              vue.createElementVNode("view", { class: "header-content" }, [
                vue.createElementVNode("h1", { class: "content-title" }, "\u591A\u5BB6\u57FA\u91D1\u516C\u53F8\u81EA\u8D2D\u65D7\u4E0B\u57FA\u91D1"),
                vue.createElementVNode("p", { class: "content-intro" }, " 1\u670827\u65E5\uFF0C\u591A\u5BB6\u516C\u52DF\u5DE8\u5934\u53D1\u5E03\u516C\u544A\uFF0C\u57FA\u4E8E\u5BF9\u4E2D\u56FD\u8D44\u672C\u5E02\u573A\u957F\u671F\u5065\u5EB7\u7A33\u5B9A\u53D1\u5C55\u7684\u4FE1\u5FC3\uFF0C\u5C06\u5728\u8FD1\u671F\u51FA\u5DE8\u8D44\u81EA\u8D2D\u65D7\u4E0B\u504F\u80A1\u578B\u57FA\u91D1\uFF0C\u6240\u6295\u8D44\u7684\u57FA\u91D1\u6301\u6709\u671F\u9650\u4E0D\u5C11\u4E8E\u4E00\u5E74\u3002 ")
              ])
            ])
          ]),
          vue.createCommentVNode(" \u5206\u4EAB\u62BD\u5C49 "),
          vue.createVNode(_component_tui_drawer, {
            mode: "bottom",
            visible: shareVisible.value,
            onClose: closeDrawer
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "d-container" }, [
                vue.createElementVNode("ul", null, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(shareList.value, (item) => {
                    return vue.openBlock(), vue.createElementBlock("li", {
                      key: item.id
                    }, [
                      vue.createElementVNode("view", { class: "shareItem" }, [
                        vue.createVNode(_component_tui_icon, {
                          name: item.type,
                          size: 90,
                          unit: "rpx",
                          color: item.color
                        }, null, 8, ["name", "color"])
                      ]),
                      vue.createElementVNode("div", { class: "share-text" }, vue.toDisplayString(item.text), 1)
                    ]);
                  }), 128))
                ]),
                vue.createElementVNode("view", {
                  class: "btn-cancle",
                  "hover-class": "btn-cancle-hover",
                  onClick: _cache[1] || (_cache[1] = ($event) => shareVisible.value = false)
                }, " \u53D6\u6D88 ")
              ])
            ]),
            _: 1
          }, 8, ["visible"])
        ], 64);
      };
    }
  });
  var Ad = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-7f6b7d2f"]]);
  const throttle = (fn, delay) => {
    let valid = true;
    return function() {
      if (!valid) {
        return false;
      }
      valid = false;
      setTimeout(() => {
        fn();
        valid = true;
      }, delay);
    };
  };
  const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      const tabs = vue.ref([
        {
          id: 1,
          title: "\u5934\u6761"
        },
        {
          id: 2,
          title: "\u5C0F\u8C03\u67E5"
        },
        {
          id: 3,
          title: "\u70ED\u70B9\u8BDD\u9898"
        },
        {
          id: 4,
          title: "\u591A\u5BB6\u57FA\u91D1\u81EA\u8D2D"
        },
        {
          id: 5,
          title: "\u5206\u6790\u89E3\u8BFB"
        }
      ]);
      const currentIndex = vue.ref(1);
      const NavBar = vue.ref();
      const changeIndex = (item) => {
        currentIndex.value = item.id;
      };
      const NavBarOffsetTop = vue.ref();
      vue.onMounted(() => {
        NavBarOffsetTop.value = NavBar.value.offsetTop;
        window.addEventListener("scroll", throttle(handleScroll, 100), true);
      });
      const isFixed = vue.ref(false);
      const handleScroll = () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        isFixed.value = scrollTop >= NavBarOffsetTop.value;
      };
      vue.onBeforeUnmount(() => {
        window.removeEventListener("scroll", throttle(handleScroll, 100));
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "list-nav" }, [
          vue.createElementVNode("ul", {
            class: vue.normalizeClass(["list-nav-ul", { fixed: isFixed.value }]),
            ref_key: "NavBar",
            ref: NavBar
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(tabs.value, (item) => {
              return vue.openBlock(), vue.createElementBlock("li", {
                key: item.id,
                class: vue.normalizeClass(["list-nav-item", { active: currentIndex.value === item.id }]),
                onClick: ($event) => changeIndex(item)
              }, vue.toDisplayString(item.title), 11, ["onClick"]);
            }), 128))
          ], 2)
        ]);
      };
    }
  });
  var Tabs = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-185085d6"]]);
  const newsList = [
    {
      id: 1,
      title: "\u9707\u52A8\u8D44\u672C\u5708\uFF01\u72C2\u4E70\u81F3\u5C1112\u4E2A\u4EBF\uFF1A\u516C\u52DF\u5DE8\u5934\u96C6\u4F53\u653E\u5927\u62DB\uFF01\u79C1\u52DF\u5927\u4F6C\u4E5F\u51FA\u624B\u4E86",
      author: "\u4E2D\u56FD\u57FA\u91D1\u62A5",
      url: "https://dfscdn.dfcfw.com/download/D25751369814569536240_w1024h680.jpg",
      comment_num: 2438
    },
    {
      id: 2,
      title: "\u9707\u52A8\u8D44\u672C\u5708\uFF01\u72C2\u4E70\u81F3\u5C1112\u4E2A\u4EBF\uFF1A\u516C\u52DF\u5DE8\u5934\u96C6\u4F53\u653E\u5927\u62DB\uFF01\u79C1\u52DF\u5927\u4F6C\u4E5F\u51FA\u624B\u4E86",
      author: "\u4E2D\u56FD\u57FA\u91D1\u62A5",
      url: "https://dfscdn.dfcfw.com/download/D25751369814569536240_w1024h680.jpg",
      comment_num: 2438
    },
    {
      id: 3,
      title: "\u9707\u52A8\u8D44\u672C\u5708\uFF01\u72C2\u4E70\u81F3\u5C1112\u4E2A\u4EBF\uFF1A\u516C\u52DF\u5DE8\u5934\u96C6\u4F53\u653E\u5927\u62DB\uFF01\u79C1\u52DF\u5927\u4F6C\u4E5F\u51FA\u624B\u4E86",
      author: "\u4E2D\u56FD\u57FA\u91D1\u62A5",
      url: "https://dfscdn.dfcfw.com/download/D25751369814569536240_w1024h680.jpg",
      comment_num: 2438
    },
    {
      id: 4,
      title: "\u9707\u52A8\u8D44\u672C\u5708\uFF01\u72C2\u4E70\u81F3\u5C1112\u4E2A\u4EBF\uFF1A\u516C\u52DF\u5DE8\u5934\u96C6\u4F53\u653E\u5927\u62DB\uFF01\u79C1\u52DF\u5927\u4F6C\u4E5F\u51FA\u624B\u4E86",
      author: "\u4E2D\u56FD\u57FA\u91D1\u62A5",
      url: "https://dfscdn.dfcfw.com/download/D25751369814569536240_w1024h680.jpg",
      comment_num: 2438
    }
  ];
  const topicList = [
    {
      id: 1,
      title: "\u7EB3\u6307\u6DA8\u903E3%\uFF0C\u82F9\u679C\u5927\u6DA8\u8FD17%",
      describe: "\u76D8\u9762\u4E0A\uFF0C\u7F8E\u80A1\u5927\u578B\u79D1\u6280\u80A1\u591A\u6570\u4E0A\u6DA8\uFF0C\u4E9A\u9A6C\u900A\u6DA83.11%\uFF0C\u8C37\u6B4C\u6DA83.37%\uFF0C\u5FAE\u8F6F\u6DA82.81%\uFF0C\u5948\u98DE\u8DCC0.61%\u3002\u82F9\u679C\u6DA86.98%\u3002\u7F8E\u80A1\u6297\u75AB\u6982\u5FF5\u80A1\u666E\u904D\u4E0A\u6DA8\uFF0CModerna\u6DA87.30%\uFF0C\u5409\u5229\u5FB7\u79D1\u5B66\u6DA82.36%\uFF0C\u8BFA\u74E6\u74E6\u514B\u65AF\u533B\u836F\u6DA813.71%\uFF0CBioNTech\u6DA84.97%\u3002\u70ED\u95E8\u4E2D\u6982\u80A1\u6DA8\u8DCC\u4E0D\u4E00\uFF0C\u597D\u672A\u6765\u6DA810.42%\uFF0C\u53EE\u549A\u4E70\u83DC\u6DA88.47%\uFF0C\u6597\u9C7C\u8DCC19.05%\u3002",
      read_num: 1296.7,
      comment_num: 2438,
      start_name: "\u82F9\u679C",
      end_name: "\u5FAE\u8F6F",
      start_index: "+6.98%",
      end_index: "+2.81%",
      trand: "up"
    },
    {
      id: 2,
      title: "\u7EB3\u6307\u6DA8\u903E3%\uFF0C\u82F9\u679C\u5927\u6DA8\u8FD17%",
      describe: "\u76D8\u9762\u4E0A\uFF0C\u7F8E\u80A1\u5927\u578B\u79D1\u6280\u80A1\u591A\u6570\u4E0A\u6DA8\uFF0C\u4E9A\u9A6C\u900A\u6DA83.11%\uFF0C\u8C37\u6B4C\u6DA83.37%\uFF0C\u5FAE\u8F6F\u6DA82.81%\uFF0C\u5948\u98DE\u8DCC0.61%\u3002\u82F9\u679C\u6DA86.98%\u3002\u7F8E\u80A1\u6297\u75AB\u6982\u5FF5\u80A1\u666E\u904D\u4E0A\u6DA8\uFF0CModerna\u6DA87.30%\uFF0C\u5409\u5229\u5FB7\u79D1\u5B66\u6DA82.36%\uFF0C\u8BFA\u74E6\u74E6\u514B\u65AF\u533B\u836F\u6DA813.71%\uFF0CBioNTech\u6DA84.97%\u3002\u70ED\u95E8\u4E2D\u6982\u80A1\u6DA8\u8DCC\u4E0D\u4E00\uFF0C\u597D\u672A\u6765\u6DA810.42%\uFF0C\u53EE\u549A\u4E70\u83DC\u6DA88.47%\uFF0C\u6597\u9C7C\u8DCC19.05%\u3002",
      read_num: 1296.7,
      comment_num: 2438,
      start_name: "\u82F9\u679C",
      end_name: "\u5FAE\u8F6F",
      start_index: "+6.98%",
      end_index: "+2.81%",
      trand: "down"
    },
    {
      id: 3,
      title: "\u7EB3\u6307\u6DA8\u903E3%\uFF0C\u82F9\u679C\u5927\u6DA8\u8FD17%",
      describe: "\u76D8\u9762\u4E0A\uFF0C\u7F8E\u80A1\u5927\u578B\u79D1\u6280\u80A1\u591A\u6570\u4E0A\u6DA8\uFF0C\u4E9A\u9A6C\u900A\u6DA83.11%\uFF0C\u8C37\u6B4C\u6DA83.37%\uFF0C\u5FAE\u8F6F\u6DA82.81%\uFF0C\u5948\u98DE\u8DCC0.61%\u3002\u82F9\u679C\u6DA86.98%\u3002\u7F8E\u80A1\u6297\u75AB\u6982\u5FF5\u80A1\u666E\u904D\u4E0A\u6DA8\uFF0CModerna\u6DA87.30%\uFF0C\u5409\u5229\u5FB7\u79D1\u5B66\u6DA82.36%\uFF0C\u8BFA\u74E6\u74E6\u514B\u65AF\u533B\u836F\u6DA813.71%\uFF0CBioNTech\u6DA84.97%\u3002\u70ED\u95E8\u4E2D\u6982\u80A1\u6DA8\u8DCC\u4E0D\u4E00\uFF0C\u597D\u672A\u6765\u6DA810.42%\uFF0C\u53EE\u549A\u4E70\u83DC\u6DA88.47%\uFF0C\u6597\u9C7C\u8DCC19.05%\u3002",
      read_num: 1296.7,
      comment_num: 2438,
      start_name: "\u82F9\u679C",
      end_name: "\u5FAE\u8F6F",
      start_index: "+6.98%",
      end_index: "+2.81%",
      trand: "up"
    },
    {
      id: 4,
      title: "\u7EB3\u6307\u6DA8\u903E3%\uFF0C\u82F9\u679C\u5927\u6DA8\u8FD17%",
      describe: "\u76D8\u9762\u4E0A\uFF0C\u7F8E\u80A1\u5927\u578B\u79D1\u6280\u80A1\u591A\u6570\u4E0A\u6DA8\uFF0C\u4E9A\u9A6C\u900A\u6DA83.11%\uFF0C\u8C37\u6B4C\u6DA83.37%\uFF0C\u5FAE\u8F6F\u6DA82.81%\uFF0C\u5948\u98DE\u8DCC0.61%\u3002\u82F9\u679C\u6DA86.98%\u3002\u7F8E\u80A1\u6297\u75AB\u6982\u5FF5\u80A1\u666E\u904D\u4E0A\u6DA8\uFF0CModerna\u6DA87.30%\uFF0C\u5409\u5229\u5FB7\u79D1\u5B66\u6DA82.36%\uFF0C\u8BFA\u74E6\u74E6\u514B\u65AF\u533B\u836F\u6DA813.71%\uFF0CBioNTech\u6DA84.97%\u3002\u70ED\u95E8\u4E2D\u6982\u80A1\u6DA8\u8DCC\u4E0D\u4E00\uFF0C\u597D\u672A\u6765\u6DA810.42%\uFF0C\u53EE\u549A\u4E70\u83DC\u6DA88.47%\uFF0C\u6597\u9C7C\u8DCC19.05%\u3002",
      read_num: 1296.7,
      comment_num: 2438,
      start_name: "\u82F9\u679C",
      end_name: "\u5FAE\u8F6F",
      start_index: "+6.98%",
      end_index: "+2.81%",
      trand: "down"
    }
  ];
  const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
    props: {
      list: Array
    },
    setup(__props) {
      const props = __props;
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "news-list" }, [
          vue.createElementVNode("ul", { class: "news-ul" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(props.list, (item) => {
              return vue.openBlock(), vue.createElementBlock("li", {
                key: item.id,
                class: "news-item"
              }, [
                vue.createElementVNode("view", { class: "news-content" }, [
                  vue.createElementVNode("h1", null, vue.toDisplayString(item.title), 1),
                  vue.createElementVNode("view", { class: "describe" }, [
                    vue.createElementVNode("div", null, vue.toDisplayString(item.author), 1),
                    vue.createElementVNode("div", null, vue.toDisplayString(item.comment_num) + "\u8BC4", 1)
                  ])
                ]),
                vue.createElementVNode("view", { class: "news-img" }, [
                  vue.createElementVNode("img", {
                    src: item.url
                  }, null, 8, ["src"])
                ])
              ]);
            }), 128))
          ])
        ]);
      };
    }
  });
  var NewsItem = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-87014602"]]);
  const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "head-line" }, [
          vue.createVNode(vue.unref(NewsItem), { list: vue.unref(newsList) }, null, 8, ["list"])
        ]);
      };
    }
  });
  const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "list-main" }, [
          vue.createVNode(vue.unref(Tabs)),
          vue.createVNode(vue.unref(_sfc_main$5))
        ]);
      };
    }
  });
  var _imports_0 = "/static/images/orangeicon.png";
  const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    props: {
      list: Array
    },
    setup(__props) {
      const props = __props;
      formatAppLog("log", "at pages/eastmoney/HotTopic/ItemList.vue:38", props.list);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "news-list" }, [
          vue.createElementVNode("ul", { class: "news-ul" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(props.list, (item) => {
              return vue.openBlock(), vue.createElementBlock("li", {
                key: item.id,
                class: "news-item"
              }, [
                vue.createElementVNode("view", { class: "news-header" }, [
                  vue.createElementVNode("img", { src: _imports_0 }),
                  vue.createElementVNode("div", { class: "read-num" }, vue.toDisplayString(item.read_num) + "\u9605\u8BFB", 1),
                  vue.createElementVNode("div", null, vue.toDisplayString(item.comment_num) + "\u8BA8\u8BBA", 1)
                ]),
                vue.createElementVNode("view", { class: "news-content" }, [
                  vue.createElementVNode("h1", null, vue.toDisplayString(item.title), 1),
                  vue.createElementVNode("view", { class: "describe" }, [
                    vue.createElementVNode("div", null, vue.toDisplayString(item.describe), 1)
                  ])
                ]),
                vue.createElementVNode("view", { class: "stocks" }, [
                  vue.createElementVNode("div", { class: "front" }, [
                    vue.createElementVNode("div", null, vue.toDisplayString(item.start_name), 1),
                    vue.createElementVNode("div", null, vue.toDisplayString(item.start_index), 1)
                  ]),
                  vue.createElementVNode("div", { class: "middle" }),
                  vue.createElementVNode("div", { class: "end" }, [
                    vue.createElementVNode("div", null, vue.toDisplayString(item.end_name), 1),
                    vue.createElementVNode("div", null, vue.toDisplayString(item.end_index), 1)
                  ])
                ])
              ]);
            }), 128))
          ])
        ]);
      };
    }
  });
  var ItemList = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-d252a644"]]);
  const _sfc_main$2 = {
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_tui_icon = resolveEasycom(vue.resolveDynamicComponent("tui-icon"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock("view", { class: "topic-main" }, [
          vue.createElementVNode("div", { class: "header" }, [
            vue.createElementVNode("h1", null, "\u70ED\u95E8\u8BDD\u9898"),
            vue.createElementVNode("text", { class: "end" }, [
              vue.createTextVNode("\u524D\u5F80APP"),
              vue.createVNode(_component_tui_icon, {
                name: "arrowright",
                class: "arrow-left",
                size: 30,
                unit: "rpx",
                color: "#999"
              })
            ])
          ]),
          vue.createElementVNode("div", { class: "topic-list" }, [
            vue.createVNode(ItemList, { list: vue.unref(topicList) }, null, 8, ["list"])
          ])
        ]);
      };
    }
  };
  var HotTopic = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8c4e9b96"]]);
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "east-main" }, [
          vue.createVNode(Ad),
          vue.createVNode(_sfc_main$4),
          vue.createVNode(HotTopic)
        ]);
      };
    }
  });
  var PagesEastmoneyIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-628d46d2"]]);
  if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
    Promise.prototype.finally = function(callback) {
      const promise = this.constructor;
      return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      }));
    };
  }
  if (uni.restoreGlobal) {
    uni.restoreGlobal(vue__namespace, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
  }
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/eastmoney/index", PagesEastmoneyIndex);
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      onLaunch(() => {
        formatAppLog("log", "at App.vue:4", "App Launch");
      });
      onShow(() => {
        formatAppLog("log", "at App.vue:7", "App Show");
      });
      onHide(() => {
        formatAppLog("log", "at App.vue:10", "App Hide");
      });
      return () => {
      };
    }
  });
  function createApp() {
    const app = vue.createVueApp(_sfc_main);
    return {
      app
    };
  }
  const __app__ = createApp().app;
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.use(uni.__vuePlugin).mount("#app");
})(Vue);
