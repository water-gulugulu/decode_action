//Thu Jul 04 2024 16:02:24 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  getToken,
  checkCk,
  validateCarmeWithType,
  User_Agent,
  getUserInfo,
  tryCatchPromise,
  couponNotify,
  getCookies
} = require("./common.js");
const _0x1c56bc = require("request");
const _0x598e2d = require("moment");
const _0x26aae0 = require("md5");
const _0xda2820 = process.env.ELE_CARME;
const _0x56c7a1 = process.env.threadCount || 1;
function _0x35842c(_0x4d0b3e) {
  let _0x4c134d = _0x598e2d(_0x4d0b3e);
  _0x4c134d = _0x4c134d.add(1, "days").startOf("day");
  return _0x4c134d.valueOf();
}
async function _0x11b904(_0x293f01) {
  const _0x1844dc = {
    bizScene: "IDIOM",
    bizParam: "{\"type\":\"ggetGold\"}",
    bizMethod: "queryIndex"
  };
  let _0x309cbc = await _0x2aa4ad(_0x293f01, _0x1844dc);
  return _0x309cbc.data;
}
async function _0x2aa4ad(_0x265ded, _0x1725bf) {
  var _0x486f1f = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    cookie: _0x265ded,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x243d58 = new Date().getTime();
  const _0x334cf7 = 12574478;
  var _0x16a034 = "data=" + encodeURIComponent(JSON.stringify(_0x1725bf));
  const _0x215dde = getToken(_0x265ded),
    _0x4537aa = _0x215dde.split("_")[0];
  const _0x2ea3ed = _0x26aae0(_0x4537aa + "&" + _0x243d58 + "&" + _0x334cf7 + "&" + JSON.stringify(_0x1725bf), _0xda2820);
  var _0x119ab3 = {
    url: "https://shopping.ele.me/h5/mtop.alsc.playgame.mini.game.dispatch/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x243d58 + "&sign=" + _0x2ea3ed + "&api=mtop.alsc.playgame.mini.game.dispatch&v=1.0&type=originaljson&dataType=json&timeout=5000&subDomain=shopping&mainDomain=ele.me&H5Request=true&pageDomain=ele.me&ttid=h5%40chrome_android_87.0.4280.141&SV=5.0",
    method: "POST",
    headers: _0x486f1f,
    body: _0x16a034
  };
  return tryCatchPromise(_0x1a575e => {
    _0x1c56bc(_0x119ab3, async (_0x594d1b, _0xd5603a, _0x134ab4) => {
      if (!_0x594d1b && _0xd5603a.statusCode === 200) {
        try {
          const _0x49dc4a = JSON.parse(_0x134ab4);
          _0x1a575e(_0x49dc4a);
        } catch (_0x14e6a1) {
          console.log(_0x134ab4);
          _0x1a575e(null);
        }
      } else {
        _0x1a575e(null);
      }
    });
  });
}
async function _0x3c4649(_0x531a7f, _0x3cab5f, _0x411f9e) {
  const _0x4e3266 = {
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    Cookie: _0x531a7f,
    "x-tap": "wx",
    referer: "https://servicewechat.com/wxece3a9a4c82f58c9/532/page-frame.html",
    "mini-janus": "3%40s41AHfqDnza7twZ2HI4gXYAtN9eRII6d1C2B5eTDUozQHuWiR6VTpHEdvgDci1%3D%3D",
    "User-Agent": "Mozilla/5.0 (Linux; Android 13; Pixel 4 XL Build/TP1A.220905.004; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5197 MMWEBSDK/20221012 MMWEBID/3313 MicroMessenger/8.0.30.2260(0x28001E55) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android"
  };
  const _0x2483dc = {
    condition: "",
    latitude: 30.17853,
    longitude: 120.221101,
    tabCode: "HONG_BAO",
    sourceFrom: "ELEME_WECHAT_MINIAPP",
    extInfo: "{\"miniAppVersion\":\"10.19.31\"}"
  };
  const _0x6fffa9 = new Date().getTime();
  const _0x481460 = 12574478;
  var _0x4d60c1 = "data=" + encodeURIComponent(JSON.stringify(_0x2483dc));
  const _0x38798b = _0x3cab5f.split(";")[0],
    _0xcf02f1 = _0x38798b.split("_")[0];
  const _0x59bfca = _0x26aae0(_0xcf02f1 + "&" + _0x6fffa9 + "&" + _0x481460 + "&" + JSON.stringify(_0x2483dc), _0xda2820);
  const _0x3d1ecf = {
    url: "https://guide-acs.m.taobao.com/h5/mtop.alsc.personal.querypasslist/1.0/2.0/?jsv=2.4.12&appKey=12574478&t=" + _0x6fffa9 + "&sign=" + _0x59bfca + "&c=" + _0x3cab5f + "&api=mtop.alsc.personal.queryPassList&dataType=json&method=GET&timeout=10000&v=1.0&type=originaljson&ttid=wxece3a9a4c82f58c9%40wechat_android_11.1.5&accountSite=eleme&needLogin=true&ecole=1&_bx-m=1",
    method: "GET",
    headers: _0x4e3266,
    body: _0x4d60c1
  };
  return tryCatchPromise(_0x320935 => {
    _0x1c56bc(_0x3d1ecf, async (_0x4c380d, _0x539c33, _0x1ec0da) => {
      if (!_0x4c380d && _0x539c33.statusCode === 200) {
        try {
          const _0x196d8d = JSON.parse(_0x1ec0da);
          if (_0x196d8d.c) {
            _0x320935(_0x196d8d.c);
          } else {
            if (_0x196d8d.data.result) {
              let _0x74a056 = _0x196d8d.data.result.passInfoList[0];
              if (_0x74a056) {
                let _0x118226 = _0x598e2d(new Date().getTime());
                let _0x2d04f1 = _0x118226.startOf("day").valueOf();
                let _0x9a41b = _0x74a056.benefitList.filter(_0x4a8dd1 => _0x4a8dd1.benefitType === "ELE_COMMODITY_HB");
                let _0x32156c = _0x9a41b.filter(_0x1e37e8 => {
                  return _0x1e37e8.gmtCreate === _0x2d04f1 / 1000 + "";
                });
                let _0x44b1c3 = _0x32156c.filter(_0x5a55f => _0x5a55f.amountText.amountText === "20");
                if (_0x44b1c3.length > 0) {
                  console.log("抢券成功", _0x44b1c3[0].title);
                  await couponNotify(_0x531a7f, "###抢券成功推送\n手机号：" + _0x411f9e + "\n抢券成功" + _0x44b1c3[0].title);
                  process.exit(0);
                } else {
                  console.log("抢券失败");
                  process.exit(0);
                }
              } else {
                console.log("抢券失败");
                process.exit(0);
              }
            } else {
              console.log("抢券失败");
              process.exit(0);
            }
          }
        } catch (_0x59fc1e) {
          console.log("查询抢券结果异常，请到 app 中查看");
          process.exit(0);
        }
      } else {
        console.log("抢券失败");
        process.exit(0);
      }
    });
  });
}
async function _0x19e516(_0x3cceeb, _0x317c0f) {
  const _0x4d2fff = {
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    Cookie: _0x3cceeb,
    "User-Agent": User_Agent
  };
  const _0x288b96 = new Date().getTime();
  const _0x357b8d = 12574478;
  const _0x3ae080 = {
    actId: "20221207144029906162546384",
    collectionId: "20221216181231449964003945",
    copyId: "20230627110035952340005303",
    bizScene: "game_center",
    channel: "abcd",
    asac: "2A22C0239QW1FOL3UUQY7U"
  };
  const _0x14041e = "data=" + encodeURIComponent(JSON.stringify(_0x3ae080));
  const _0x24a84c = getToken(_0x3cceeb),
    _0x2db336 = _0x24a84c.split("_")[0];
  const _0x42775a = _0x26aae0(_0x2db336 + "&" + _0x288b96 + "&" + _0x357b8d + "&" + JSON.stringify(_0x3ae080));
  const _0x18f716 = {
    url: "https://guide-acs.m.taobao.com/h5/mtop.koubei.interactioncenter.platform.right.exchange.v2/1.0/5.0/?jsv=2.7.1&SV=5.0&appKey=12574478&ttid=1601274958480%40eleme_android_10.14.3&t=" + _0x288b96 + "&sign=" + _0x42775a + "&api=mtop.koubei.interactioncenter.platform.right.exchange.v2",
    method: "POST",
    headers: _0x4d2fff,
    body: _0x14041e
  };
  const _0x2d71f9 = {
    length: _0x56c7a1
  };
  const _0x544ec1 = Array.from(_0x2d71f9, () => {
    return tryCatchPromise(_0x2d5111 => {
      _0x1c56bc(_0x18f716, async (_0x285573, _0x46eadc, _0xfc1b12) => {
        if (!_0x285573 && _0x46eadc.statusCode === 200) {
          try {
            const _0x3b6e5b = JSON.parse(_0xfc1b12);
            if (_0x3b6e5b.data.data) {
              console.log("抢券成功", _0x3b6e5b.data.data[0].rightName);
              await couponNotify(_0x3cceeb, "###抢券成功推送\n手机号：" + _0x317c0f + "\n抢券成功" + _0x3b6e5b.data.data[0].rightName);
              process.exit(0);
            } else {
              _0x2d5111();
            }
          } catch (_0x542a27) {
            console.log(_0x542a27);
            _0x2d5111(null);
          }
        } else {
          _0x2d5111(null);
        }
      });
    });
  });
  await Promise.all(_0x544ec1).then(_0x438eb8 => {}).catch(_0xd4862d => {});
}
async function _0x2e0c08() {
  await validateCarmeWithType(_0xda2820, 1);
  const _0x17715d = getCookies("elmqqck");
  for (let _0x20d7ed = 0; _0x20d7ed < _0x17715d.length; _0x20d7ed++) {
    let _0xcd6bdb = _0x17715d[_0x20d7ed];
    _0xcd6bdb = await checkCk(_0xcd6bdb, _0x20d7ed);
    if (!_0xcd6bdb) {
      process.exit(0);
      continue;
    }
    let _0x493979 = await getUserInfo(_0xcd6bdb);
    if (!_0x493979.username) {
      console.log("第", _0x20d7ed + 1, "账号失效！请重新登录！！！😭");
      process.exit(0);
    }
    const _0x4f63d5 = _0x493979.user_id;
    let _0x5172fa = _0x493979.mobile;
    console.log("****** #" + (_0x20d7ed + 1), _0x5172fa, "*********");
    console.log("账号的 id 为", _0x4f63d5);
    console.log("当前抢券线程数为", _0x56c7a1);
    let _0xa56c1 = await _0x11b904(_0xcd6bdb);
    let _0x5a59ed = -1;
    if (_0xa56c1.data) {
      _0x5a59ed = JSON.parse(_0xa56c1.data).num;
    } else {
      _0x5a59ed = -1;
    }
    if (_0x5a59ed !== -1 && _0x5a59ed < 13999) {
      console.log("金币不够兑换 20 元券，程序结束");
      process.exit(0);
    }
    let _0x3c0d6b;
    if (_0xa56c1) {
      _0x3c0d6b = _0xa56c1.currentTimestamp;
    } else {
      _0x3c0d6b = new Date().getTime();
    }
    let _0x3fa52f = _0x35842c(_0x3c0d6b);
    let _0x3432df = _0x3fa52f - _0x3c0d6b - 2000;
    console.log("程序将在", _0x3432df / 1000, "秒后开始抢券");
    setTimeout(async () => {
      _0x136efb(_0xcd6bdb, _0x5172fa);
      while (true) {
        await _0x19e516(_0xcd6bdb, _0x5172fa);
      }
    }, _0x3432df);
  }
}
function _0x136efb(_0x3ae20e, _0x200650) {
  setTimeout(async () => {
    let _0x368a1d = await _0x3c4649(_0x3ae20e, "64c767d7e6851eebe3c8cd476b0bc622_1692237574823;6f86648948993abca30366d96015297a", _0x200650);
    if (_0x368a1d) {
      await _0x3c4649(_0x3ae20e, _0x368a1d, _0x200650);
    }
    process.exit(0);
  }, 10000);
}
_0x2e0c08();
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}