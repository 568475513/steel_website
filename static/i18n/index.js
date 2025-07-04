  // 中文、英文切换
  $(function() {
    var defaultLang = sessionStorage.getItem('Language') || "cn"; /*默认语言*/
    var $i18n = $("[i18n]");
    console.log(defaultLang, window.location.pathname, '组件')
    setTimeout(() => {
      $i18n.i18n({
        defaultLang: defaultLang,
        filePath: window.location.pathname.includes('/product/') ? "../../static/i18n/" : "static/i18n/", //注意！要配置好语言文件的正确路径
        filePrefix: "i18n_",
        fileSuffix: "",
        forever: true,
        callback: function() {
          console.log('i18n callback')
        }
      });
      //  /*切换为中文 - 按钮*/
      // $("#chinese").click(function() {
      //   console.log("切换为中文", $("[i18n]"));
      //   defaultLang = 'cn';
      //   setLang();
      // });
      /*切换为英文 - 按钮*/
      $("#english").click(function() {
        setLang('en');
      });
      /*切换为西班牙语 - 按钮*/
      $("#español").click(function() {
        setLang('es');
      });
      /*切换为俄语 - 按钮*/
      $("#pусский").click(function() {
        setLang('ru');
      });
    }, 100)

    function setLang(lang) {
      if(defaultLang === lang) {
        return;
      }
      defaultLang = lang;
      sessionStorage.setItem('Language', defaultLang);
      console.log(defaultLang, 'defaultLang')
      $i18n.i18n({
        defaultLang: defaultLang,
        filePath: window.location.pathname.includes('/product/') ? "../../static/i18n/" : "static/i18n/", //注意！要配置好语言文件的正确路径
        filePrefix: "i18n_",
        fileSuffix: "",
        forever: true,
        callback: function() {
          console.log('i18n callback')
        }
      });
    }
  });
