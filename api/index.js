var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_recoil = require("recoil");

// app/styles/app.css
var app_default = "/build/_assets/app-VNA5LSMC.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var meta = () => ({
  charset: "utf-8",
  title: "Let's Try Keyboard Layouts!",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", "data-theme": "wireframe", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_recoil.RecoilRoot, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/ogimages/$id[.png].tsx
var id_png_exports = {};
__export(id_png_exports, {
  loader: () => loader
});
var loader = async ({ request, context }) => {
};

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader2,
  meta: () => meta2
});
var import_react12 = require("@remix-run/react"), import_react13 = require("react");

// app/components/Keyboard/Keyboard.tsx
var import_clsx2 = __toESM(require("clsx")), import_react4 = require("react"), import_react5 = require("react"), import_react6 = require("react");

// app/hooks/useKeyboard.tsx
var import_recoil3 = require("recoil");

// app/atoms/state.ts
var import_recoil2 = require("recoil"), pressedKeyState = (0, import_recoil2.atom)({
  key: "pressedKeyState",
  default: [
    "",
    {
      row: null,
      col: null,
      layer: 0
    }
  ]
}), isCustomizingState = (0, import_recoil2.atom)({
  key: "isCustomizingState",
  default: !1
}), customKeyboardState = (0, import_recoil2.atom)({
  key: "customKeyboardState",
  default: null
}), myKeyboardState = (0, import_recoil2.atom)({
  key: "myKeyboardState",
  default: "qwerty"
}), tryKeyboardState = (0, import_recoil2.atom)({
  key: "tryKeyboardState",
  default: "dvorak"
});

// app/keyboard.json
var keyboard_default = {
  qwerty: {
    name: "QWERTY",
    layout: [
      [
        ["1", "!"],
        ["2", "@"],
        ["3", "#"],
        ["4", "$"],
        ["5", "%"],
        ["6", "^"],
        ["7", "&"],
        ["8", "*"],
        ["9", "("],
        ["0", ")"],
        ["-", "_"],
        ["=", "+"]
      ],
      ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", ["[", "{"], ["]", "}"]],
      ["a", "s", "d", "f", "g", "h", "j", "k", "l", [";", ":"], ["'", '"']],
      ["z", "x", "c", "v", "b", "n", "m", [",", "<"], [".", ">"], ["/", "?"]]
    ]
  },
  dvorak: {
    name: "Dvorak",
    layout: [
      [
        ["1", "!"],
        ["2", "@"],
        ["3", "#"],
        ["4", "$"],
        ["5", "%"],
        ["6", "^"],
        ["7", "&"],
        ["8", "*"],
        ["9", "("],
        ["0", ")"],
        ["[", "{"],
        ["]", "}"]
      ],
      ["'", ",", ".", "p", "y", "f", "g", "c", "r", "l", ["/", "?"], ["=", "+"]],
      ["a", "o", "e", "u", "i", "d", "h", "t", "n", "s", ["-", "_"]],
      [";", "q", "j", "k", "x", "b", "m", "w", "v", "z"]
    ]
  },
  colemak: {
    name: "Colemak",
    layout: [
      [
        ["1", "!"],
        ["2", "@"],
        ["3", "#"],
        ["4", "$"],
        ["5", "%"],
        ["6", "^"],
        ["7", "&"],
        ["8", "*"],
        ["9", "("],
        ["0", ")"],
        ["-", "_"],
        ["=", "+"]
      ],
      ["q", "w", "f", "p", "g", "j", "l", "u", "y", [";", ":"], ["[", "{"], ["]", "}"]],
      ["a", "r", "s", "t", "d", "h", "n", "e", "i", ["o", "O"], ["'", '"']],
      ["z", "x", "c", "v", "b", "k", "m", [",", "<"], [".", ">"], ["/", "?"]]
    ]
  }
};

// app/hooks/useKeyboard.tsx
var useKeyboard = () => {
  let pressedKey = (0, import_recoil3.useRecoilValue)(pressedKeyState), tryKeyboard = (0, import_recoil3.useRecoilValue)(tryKeyboardState), [customKeyboard, setCustomKeyboard] = (0, import_recoil3.useRecoilState)(customKeyboardState), layout = tryKeyboard === "custom" && customKeyboard ? customKeyboard : keyboard_default[tryKeyboard].layout, updateLayout = (position, key, shiftLayerKey) => {
    if (!customKeyboard)
      return;
    let newCustomKeyboard = JSON.parse(JSON.stringify(customKeyboard));
    console.log(position, key, shiftLayerKey), console.log(newCustomKeyboard[position.row][position.col]), newCustomKeyboard[position.row][position.col] = shiftLayerKey ? [key, shiftLayerKey] : key, setCustomKeyboard(newCustomKeyboard);
  };
  return {
    pressedKeyPosition: pressedKey[1],
    layout,
    updateLayout
  };
};

// app/components/Keyboard/KeySwitch.tsx
var import_react3 = require("react"), import_clsx = __toESM(require("clsx")), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), KeySwitch = (0, import_react3.memo)(
  ({ keys, isPressed = !1, isHomePosition = !1, isEditing = !1 }) => {
    let [layer1, layer2] = keys;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "div",
      {
        className: (0, import_clsx.default)(
          "w-[50px] h-[50px] relative border rounded-md border-base-content flex flex-col gap-1 items-center justify-center",
          isPressed ? "bg-black/30 text-white" : "bg-white  text-base-content where:shadow-[inset_0_0_0_5px] where:shadow-gray-200",
          isEditing ? "border-2 border-dotted border-info bg-info/10 shadow-none" : ""
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-sm leading-none", children: layer2 }, void 0, !1, {
            fileName: "app/components/Keyboard/KeySwitch.tsx",
            lineNumber: 26,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-xl leading-none", children: layer1.toUpperCase() }, void 0, !1, {
            fileName: "app/components/Keyboard/KeySwitch.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this),
          isHomePosition && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute left-1/2 -translate-x-1/2 top-[80%] w-[10px] h-[2px] bg-black" }, void 0, !1, {
            fileName: "app/components/Keyboard/KeySwitch.tsx",
            lineNumber: 29,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Keyboard/KeySwitch.tsx",
        lineNumber: 15,
        columnNumber: 7
      },
      this
    );
  }
);
KeySwitch.displayName = "KeySwitch";

// app/components/Keyboard/Keyboard.tsx
var import_PopperUnstyled = __toESM(require("@mui/base/PopperUnstyled"));

// app/components/Keyboard/CustomKeyPopper.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), CustomKeyPopper = ({
  selectedKey,
  setSelectedKey,
  handleClose
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative bg-base-100 shadow-[0_0_15px_0px] rounded-sm p-5 w-[200px]", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "button",
    {
      className: "absolute right-3 top-3",
      onClick: (e) => {
        handleClose(), e.stopPropagation();
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          stroke: "currentColor",
          className: "w-6 h-6",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M6 18L18 6M6 6l12 12"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Keyboard/CustomKeyPopper.tsx",
              lineNumber: 31,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/Keyboard/CustomKeyPopper.tsx",
          lineNumber: 23,
          columnNumber: 9
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/Keyboard/CustomKeyPopper.tsx",
      lineNumber: 16,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "form-control w-full max-w-xs", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "custom-key", className: "label", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "label-text font-bold", children: "Key" }, void 0, !1, {
      fileName: "app/components/Keyboard/CustomKeyPopper.tsx",
      lineNumber: 40,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Keyboard/CustomKeyPopper.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "select",
      {
        value: selectedKey[0],
        onChange: (e) => setSelectedKey(e.target.value, selectedKey[1]),
        name: "custom-key",
        className: "select select-bordered select-sm w-full max-w-xs text-md",
        children: [...Array(26)].map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: String.fromCharCode(97 + i), children: String.fromCharCode(97 + i).toUpperCase() }, i, !1, {
          fileName: "app/components/Keyboard/CustomKeyPopper.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this))
      },
      void 0,
      !1,
      {
        fileName: "app/components/Keyboard/CustomKeyPopper.tsx",
        lineNumber: 42,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Keyboard/CustomKeyPopper.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "form-control w-full max-w-xs", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "custom-shift-layer", className: "label", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "label-text font-bold", children: "Shift Layer" }, void 0, !1, {
      fileName: "app/components/Keyboard/CustomKeyPopper.tsx",
      lineNumber: 57,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Keyboard/CustomKeyPopper.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "select",
      {
        value: selectedKey[1] ?? "",
        onChange: (e) => setSelectedKey(selectedKey[0], e.target.value),
        name: "custom-shift-layer",
        className: "select select-bordered select-sm w-full max-w-xs text-md",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "", disabled: !0 }, void 0, !1, {
            fileName: "app/components/Keyboard/CustomKeyPopper.tsx",
            lineNumber: 65,
            columnNumber: 11
          }, this),
          [...Array(26)].map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: String.fromCharCode(97 + i), children: String.fromCharCode(97 + i).toUpperCase() }, i, !1, {
            fileName: "app/components/Keyboard/CustomKeyPopper.tsx",
            lineNumber: 67,
            columnNumber: 13
          }, this))
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Keyboard/CustomKeyPopper.tsx",
        lineNumber: 59,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Keyboard/CustomKeyPopper.tsx",
    lineNumber: 55,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Keyboard/CustomKeyPopper.tsx",
  lineNumber: 15,
  columnNumber: 5
}, this);

// app/components/Keyboard/Keyboard.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), Keyboard = (0, import_react6.memo)(({ isEdit = !1 }) => {
  let { pressedKeyPosition, layout, updateLayout } = useKeyboard(), [anchorEl, setAnchorEl] = (0, import_react5.useState)(null), ref = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    var _a;
    isEdit && ((_a = ref.current) == null || _a.click());
  }, [isEdit]);
  let handleClickKeySwitch = (e) => {
    setAnchorEl(e.currentTarget);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "gap-1 flex flex-col shrink-0", children: layout.map((row, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "div",
    {
      className: (0, import_clsx2.default)(
        "flex shrink-0 gap-1 items-center",
        i === 0 ? "justify-start" : "justify-center"
      ),
      children: row.map((key, j) => {
        let id = `${i}-${j}`, keys = Array.isArray(key) ? key : [key], isPressed = i === pressedKeyPosition.row && j === pressedKeyPosition.col, isEditing = (anchorEl == null ? void 0 : anchorEl.id) === id;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "div",
          {
            ref: i === 2 && j === 0 ? ref : void 0,
            id,
            className: (0, import_clsx2.default)("relative", isEdit ? "cursor-pointer" : ""),
            onClick: isEdit ? handleClickKeySwitch : void 0,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                KeySwitch,
                {
                  keys,
                  isPressed,
                  isEditing,
                  isHomePosition: i === 2 && (j === 3 || j === 6)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Keyboard/Keyboard.tsx",
                  lineNumber: 55,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                import_PopperUnstyled.default,
                {
                  id: "placement-popper",
                  open: (anchorEl == null ? void 0 : anchorEl.id) === id,
                  anchorEl,
                  placement: "bottom",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                    CustomKeyPopper,
                    {
                      handleClose: () => setAnchorEl(null),
                      selectedKey: keys,
                      setSelectedKey: (key2, shiftLayoutKey) => {
                        updateLayout(
                          {
                            row: i,
                            col: j
                          },
                          key2,
                          shiftLayoutKey
                        );
                      }
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Keyboard/Keyboard.tsx",
                      lineNumber: 67,
                      columnNumber: 21
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Keyboard/Keyboard.tsx",
                  lineNumber: 61,
                  columnNumber: 19
                },
                this
              )
            ]
          },
          j,
          !0,
          {
            fileName: "app/components/Keyboard/Keyboard.tsx",
            lineNumber: 48,
            columnNumber: 17
          },
          this
        );
      })
    },
    i,
    !1,
    {
      fileName: "app/components/Keyboard/Keyboard.tsx",
      lineNumber: 34,
      columnNumber: 11
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/Keyboard/Keyboard.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Keyboard/Keyboard.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
});
Keyboard.displayName = "Keyboard";

// app/components/Modal/ShareModal.tsx
var import_react7 = require("react"), import_ModalUnstyled = __toESM(require("@mui/base/ModalUnstyled")), import_clsx3 = __toESM(require("clsx")), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), BackdropUnstyled = (0, import_react7.forwardRef)((props, ref) => {
  let { open, className, ...other } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "div",
    {
      className: (0, import_clsx3.default)({ "MuiBackdrop-open": open }, className),
      ref,
      ...other
    },
    void 0,
    !1,
    {
      fileName: "app/components/Modal/ShareModal.tsx",
      lineNumber: 17,
      columnNumber: 5
    },
    this
  );
});
BackdropUnstyled.displayName = "BackdropUnstyled";
var ShareModal = ({ open, onClose }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  import_ModalUnstyled.default,
  {
    open,
    onClose,
    classes: {
      root: "fixed inset-0 z-50 flex items-center justify-center"
    },
    slotProps: {
      backdrop: {
        className: "fixed inset-0 -z-10 bg-black/50"
      }
    },
    slots: {
      backdrop: BackdropUnstyled
    },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "bg-white w-[70%] h-[50%]", children: "aaaaaaaaaa" }, void 0, !1, {
      fileName: "app/components/Modal/ShareModal.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/Modal/ShareModal.tsx",
    lineNumber: 29,
    columnNumber: 5
  },
  this
);

// app/components/TextArea/TextArea.tsx
var import_react9 = require("react"), import_react10 = require("react");

// app/hooks/useInputText.ts
var import_react8 = require("react"), import_recoil4 = require("recoil");

// app/utils/convertKey.ts
var convertKey = (key, myKeyboard, tryKeyboard) => {
  let myKeyboardLayout = myKeyboard, tryKeyboardLayout = tryKeyboard, toLowerKey = key.toLowerCase(), rowIndex = null, colIndex = null, layerIndex = 0, found = !1;
  for (let i = 0; i < myKeyboardLayout.length; i++) {
    for (let j = 0; j < myKeyboardLayout[i].length; j++)
      if (typeof myKeyboardLayout[i][j] == "string") {
        if (myKeyboardLayout[i][j] === toLowerKey) {
          rowIndex = i, colIndex = j, found = !0;
          break;
        }
      } else
        for (let k = 0; k < myKeyboardLayout[i][j].length; k++)
          if (myKeyboardLayout[i][j][k] === toLowerKey) {
            rowIndex = i, colIndex = j, layerIndex = k, found = !0;
            break;
          }
    if (found)
      break;
  }
  return found && rowIndex !== null && colIndex !== null ? [
    tryKeyboardLayout[rowIndex][colIndex][layerIndex],
    { row: rowIndex, col: colIndex, layer: layerIndex }
  ] : [key, { row: null, col: null, layer: 0 }];
};

// app/hooks/useInputText.ts
var useInputText = () => {
  let [pressedKey, setPressedKey] = (0, import_recoil4.useRecoilState)(pressedKeyState), resetPressedKey = (0, import_recoil4.useResetRecoilState)(pressedKeyState), myKeyboard = (0, import_recoil4.useRecoilValue)(myKeyboardState), tryKeyboard = (0, import_recoil4.useRecoilValue)(tryKeyboardState), customKeyboard = (0, import_recoil4.useRecoilValue)(customKeyboardState), [readonly, setReadonly] = (0, import_react8.useState)(!0), [inputText, setInputText] = (0, import_react8.useState)(""), handleChange = (0, import_react8.useCallback)(
    (e) => {
      if (!readonly) {
        let { value } = e.target;
        console.log(value), setInputText(value);
      }
    },
    [readonly]
  ), handleKeyDown = (0, import_react8.useCallback)(
    (e) => {
      let { key, ctrlKey, shiftKey, altKey, metaKey } = e;
      if (key.length === 1) {
        if (!(ctrlKey || altKey || metaKey)) {
          setReadonly(!0);
          let [convertedKey, position] = convertKey(
            key,
            keyboard_default[myKeyboard].layout,
            tryKeyboard === "custom" && customKeyboard != null ? customKeyboard : keyboard_default[tryKeyboard].layout
          );
          console.log({ convertedKey, key }), setPressedKey([convertedKey, position]), setInputText(
            (prev) => prev + (shiftKey ? convertedKey.toUpperCase() : convertedKey)
          );
        }
      } else
        setReadonly(!(key === "Backspace" || key === "Delete" || key === "Enter"));
    },
    [myKeyboard, tryKeyboard, customKeyboard]
  ), handleKeyUp = (0, import_react8.useCallback)(() => {
    resetPressedKey(), setReadonly(!0);
  }, []);
  return {
    inputText,
    handleChange,
    handleKeyDown,
    handleKeyUp
  };
};

// app/components/TextArea/TextArea.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), TextArea = () => {
  let { handleChange, inputText, handleKeyDown, handleKeyUp } = useInputText(), ref = (0, import_react9.useRef)(null);
  return (0, import_react10.useEffect)(() => {
    var _a;
    (_a = ref.current) == null || _a.select();
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-full flex justify-center items-center gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    "textarea",
    {
      ref,
      placeholder: "Let's try Keyboard Layouts!",
      value: inputText,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onChange: handleChange,
      className: "w-full h-[200px] textarea textarea-bordered text-lg focus:outline-info-content"
    },
    void 0,
    !1,
    {
      fileName: "app/components/TextArea/TextArea.tsx",
      lineNumber: 19,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/TextArea/TextArea.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
};

// app/hooks/useCustomizing.tsx
var import_recoil5 = require("recoil");
var useCustomizing = () => {
  let [isCustomizing, setIsCustomizing] = (0, import_recoil5.useRecoilState)(isCustomizingState), setCustomizeKeyboard = (0, import_recoil5.useSetRecoilState)(customKeyboardState);
  return {
    isCustomizing,
    handleCreateOriginalKeyboard: () => {
      setCustomizeKeyboard((prev) => prev ?? keyboard_default.qwerty.layout), setIsCustomizing(!0);
    }
  };
};

// app/hooks/useSelectKeyboard.tsx
var import_recoil6 = require("recoil");
var import_react11 = require("react"), keyboardList = Object.entries(keyboard_default).map(([key, value]) => ({
  key,
  name: value.name
})), useSelectKeyboard = () => {
  let [myKeyboard, setMyKeyboard] = (0, import_recoil6.useRecoilState)(myKeyboardState), [tryKeyboard, setTryKeyboard] = (0, import_recoil6.useRecoilState)(tryKeyboardState), [isCustomizing, setIsCustomizing] = (0, import_recoil6.useRecoilState)(isCustomizingState), customKeyboard = (0, import_recoil6.useRecoilValue)(customKeyboardState);
  console.log(customKeyboard);
  let myKeyboardList = keyboardList, tryKeyboardList = customKeyboard ? [...keyboardList, { key: "custom", name: "Custom" }] : keyboardList;
  return (0, import_react11.useEffect)(() => {
    isCustomizing && setTryKeyboard("custom");
  }, [isCustomizing]), {
    myKeyboardList,
    tryKeyboardList,
    myKeyboard,
    tryKeyboard,
    handleSelectMyKeyboard: (e) => {
      let { value } = e.target;
      console.log(value), setMyKeyboard(value);
    },
    handleSelectTryKeyboard: (e) => {
      let { value } = e.target;
      setIsCustomizing(!1), setTryKeyboard(value);
    }
  };
};

// app/routes/index.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), meta2 = ({ data, params }) => (console.log(data, params), {
  title: data.title ?? "no title",
  description: "This becomes the nice preview on search results.",
  image: ""
}), loader2 = async ({ request }) => {
  let url = new URL(request.url), title = url.searchParams.get("title");
  return console.log(url), {
    title
  };
};
function Index() {
  let data = (0, import_react12.useLoaderData)();
  console.log(data);
  let { isCustomizing, handleCreateOriginalKeyboard } = useCustomizing(), {
    myKeyboardList,
    tryKeyboardList,
    myKeyboard,
    tryKeyboard,
    handleSelectMyKeyboard,
    handleSelectTryKeyboard
  } = useSelectKeyboard(), [isOpenModal, setIsOpenModal] = (0, import_react13.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "bg-base h-screen flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("header", { className: "w-full flex items-center justify-center py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "text-3xl font-bold text-black", children: "Let's Try Keyboard Layouts!" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "max-w-3xl mx-auto bg-neutral h-full p-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "font-bold", children: "Try" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 53,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "select",
            {
              className: "select select-bordered w-64",
              value: tryKeyboard,
              onChange: handleSelectTryKeyboard,
              children: tryKeyboardList.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("option", { value: item.key, children: item.name }, item.key, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 60,
                columnNumber: 17
              }, this))
            },
            void 0,
            !1,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 54,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "font-bold", children: "Your" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 67,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "select",
            {
              className: "select select-bordered",
              value: myKeyboard,
              onChange: handleSelectMyKeyboard,
              children: myKeyboardList.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("option", { value: item.key, children: item.name }, item.key, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 74,
                columnNumber: 17
              }, this))
            },
            void 0,
            !1,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 68,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Keyboard, { isEdit: isCustomizing }, tryKeyboard, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TextArea, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-5 flex items-center justify-center", children: isCustomizing ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex gap-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "button",
        {
          className: "btn btn-primary gap-2",
          onClick: () => {
            setIsOpenModal(!0);
          },
          children: [
            "Share",
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                className: "w-6 h-6",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 105,
                    columnNumber: 19
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/index.tsx",
                lineNumber: 97,
                columnNumber: 17
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 90,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "button",
        {
          className: "btn btn-primary",
          onClick: handleCreateOriginalKeyboard,
          children: "Create original layout"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 114,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      ShareModal,
      {
        open: isOpenModal,
        onClose: () => {
          console.log("cose"), setIsOpenModal(!1);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 123,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "a6560d13", entry: { module: "/build/entry.client-VOT6GU2W.js", imports: ["/build/_shared/chunk-V6VONLRJ.js", "/build/_shared/chunk-42Z7WWMI.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-PLJZNOXU.js", imports: ["/build/_shared/chunk-KNRY73ST.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-FQK4SGVD.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/ogimages/$id[.png]": { id: "routes/ogimages/$id[.png]", parentId: "root", path: "ogimages/:id.png", index: void 0, caseSensitive: void 0, module: "/build/routes/ogimages/$id[.png]-MLN3HIYD.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-A6560D13.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/ogimages/$id[.png]": {
    id: "routes/ogimages/$id[.png]",
    parentId: "root",
    path: "ogimages/:id.png",
    index: void 0,
    caseSensitive: void 0,
    module: id_png_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
