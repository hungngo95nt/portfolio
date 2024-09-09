import { FunctionComponent } from 'react';
import icon from '../assets/unnamed.ico'; // Adjust the path as needed

const Home: FunctionComponent = () => {
  return (
    <div className="flex flex-col gap-4 w-3/4 mt-20 p-4">
      <div className="justify-center">
        <div>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <title>Van-Hung Ngo </title>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n/* cspell:disable-file */\n/* webkit printing magic: print all background colors */\nhtml {\n\t-webkit-print-color-adjust: exact;\n}\n* {\n\tbox-sizing: border-box;\n\t-webkit-print-color-adjust: exact;\n}\n\nhtml,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n@media only screen {\n\tbody {\n\t\tmargin: 2em auto;\n\t\tmax-width: 900px;\n\t\tcolor: rgb(55, 53, 47);\n\t}\n}\n\nbody {\n\tline-height: 1.5;\n\twhite-space: pre-wrap;\n}\n\na,\na.visited {\n\tcolor: inherit;\n\ttext-decoration: underline;\n}\n\n.pdf-relative-link-path {\n\tfont-size: 80%;\n\tcolor: #444;\n}\n\nh1,\nh2,\nh3 {\n\tletter-spacing: -0.01em;\n\tline-height: 1.2;\n\tfont-weight: 600;\n\tmargin-bottom: 0;\n}\n\n.page-title {\n\tfont-size: 2.5rem;\n\tfont-weight: 700;\n\tmargin-top: 0;\n\tmargin-bottom: 0.75em;\n}\n\nh1 {\n\tfont-size: 1.875rem;\n\tmargin-top: 1.875rem;\n}\n\nh2 {\n\tfont-size: 1.5rem;\n\tmargin-top: 1.5rem;\n}\n\nh3 {\n\tfont-size: 1.25rem;\n\tmargin-top: 1.25rem;\n}\n\n.source {\n\tborder: 1px solid #ddd;\n\tborder-radius: 3px;\n\tpadding: 1.5em;\n\tword-break: break-all;\n}\n\n.callout {\n\tborder-radius: 3px;\n\tpadding: 1rem;\n}\n\nfigure {\n\tmargin: 1.25em 0;\n\tpage-break-inside: avoid;\n}\n\nfigcaption {\n\topacity: 0.5;\n\tfont-size: 85%;\n\tmargin-top: 0.5em;\n}\n\nmark {\n\tbackground-color: transparent;\n}\n\n.indented {\n\tpadding-left: 1.5em;\n}\n\nhr {\n\tbackground: transparent;\n\tdisplay: block;\n\twidth: 100%;\n\theight: 1px;\n\tvisibility: visible;\n\tborder: none;\n\tborder-bottom: 1px solid rgba(55, 53, 47, 0.09);\n}\n\nimg {\n\tmax-width: 100%;\n}\n\n@media only print {\n\timg {\n\t\tmax-height: 100vh;\n\t\tobject-fit: contain;\n\t}\n}\n\n@page {\n\tmargin: 1in;\n}\n\n.collection-content {\n\tfont-size: 0.875rem;\n}\n\n.column-list {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.column {\n\tpadding: 0 1em;\n}\n\n.column:first-child {\n\tpadding-left: 0;\n}\n\n.column:last-child {\n\tpadding-right: 0;\n}\n\n.table_of_contents-item {\n\tdisplay: block;\n\tfont-size: 0.875rem;\n\tline-height: 1.3;\n\tpadding: 0.125rem;\n}\n\n.table_of_contents-indent-1 {\n\tmargin-left: 1.5rem;\n}\n\n.table_of_contents-indent-2 {\n\tmargin-left: 3rem;\n}\n\n.table_of_contents-indent-3 {\n\tmargin-left: 4.5rem;\n}\n\n.table_of_contents-link {\n\ttext-decoration: none;\n\topacity: 0.7;\n\tborder-bottom: 1px solid rgba(55, 53, 47, 0.18);\n}\n\ntable,\nth,\ntd {\n\tborder: 1px solid rgba(55, 53, 47, 0.09);\n\tborder-collapse: collapse;\n}\n\ntable {\n\tborder-left: none;\n\tborder-right: none;\n}\n\nth,\ntd {\n\tfont-weight: normal;\n\tpadding: 0.25em 0.5em;\n\tline-height: 1.5;\n\tmin-height: 1.5em;\n\ttext-align: left;\n}\n\nth {\n\tcolor: rgba(55, 53, 47, 0.6);\n}\n\nol,\nul {\n\tmargin: 0;\n\tmargin-block-start: 0.6em;\n\tmargin-block-end: 0.6em;\n}\n\nli > ol:first-child,\nli > ul:first-child {\n\tmargin-block-start: 0.6em;\n}\n\nul > li {\n\tlist-style: disc;\n}\n\nul.to-do-list {\n\tpadding-inline-start: 0;\n}\n\nul.to-do-list > li {\n\tlist-style: none;\n}\n\n.to-do-children-checked {\n\ttext-decoration: line-through;\n\topacity: 0.375;\n}\n\nul.toggle > li {\n\tlist-style: none;\n}\n\nul {\n\tpadding-inline-start: 1.7em;\n}\n\nul > li {\n\tpadding-left: 0.1em;\n}\n\nol {\n\tpadding-inline-start: 1.6em;\n}\n\nol > li {\n\tpadding-left: 0.2em;\n}\n\n.mono ol {\n\tpadding-inline-start: 2em;\n}\n\n.mono ol > li {\n\ttext-indent: -0.4em;\n}\n\n.toggle {\n\tpadding-inline-start: 0em;\n\tlist-style-type: none;\n}\n\n/* Indent toggle children */\n.toggle > li > details {\n\tpadding-left: 1.7em;\n}\n\n.toggle > li > details > summary {\n\tmargin-left: -1.1em;\n}\n\n.selected-value {\n\tdisplay: inline-block;\n\tpadding: 0 0.5em;\n\tbackground: rgba(206, 205, 202, 0.5);\n\tborder-radius: 3px;\n\tmargin-right: 0.5em;\n\tmargin-top: 0.3em;\n\tmargin-bottom: 0.3em;\n\twhite-space: nowrap;\n}\n\n.collection-title {\n\tdisplay: inline-block;\n\tmargin-right: 1em;\n}\n\n.page-description {\n    margin-bottom: 2em;\n}\n\n.simple-table {\n\tmargin-top: 1em;\n\tfont-size: 0.875rem;\n\tempty-cells: show;\n}\n.simple-table td {\n\theight: 29px;\n\tmin-width: 120px;\n}\n\n.simple-table th {\n\theight: 29px;\n\tmin-width: 120px;\n}\n\n.simple-table-header-color {\n\tbackground: rgb(247, 246, 243);\n\tcolor: black;\n}\n.simple-table-header {\n\tfont-weight: 500;\n}\n\ntime {\n\topacity: 0.5;\n}\n\n.icon {\n\tdisplay: inline-block;\n\tmax-width: 1.2em;\n\tmax-height: 1.2em;\n\ttext-decoration: none;\n\tvertical-align: text-bottom;\n\tmargin-right: 0.5em;\n}\n\nimg.icon {\n\tborder-radius: 3px;\n}\n\n.user-icon {\n\twidth: 1.5em;\n\theight: 1.5em;\n\tborder-radius: 100%;\n\tmargin-right: 0.5rem;\n}\n\n.user-icon-inner {\n\tfont-size: 0.8em;\n}\n\n.text-icon {\n\tborder: 1px solid #000;\n\ttext-align: center;\n}\n\n.page-cover-image {\n\tdisplay: block;\n\tobject-fit: cover;\n\twidth: 100%;\n\tmax-height: 30vh;\n}\n\n.page-header-icon {\n\tfont-size: 3rem;\n\tmargin-bottom: 1rem;\n}\n\n.page-header-icon-with-cover {\n\tmargin-top: -0.72em;\n\tmargin-left: 0.07em;\n}\n\n.page-header-icon img {\n\tborder-radius: 3px;\n}\n\n.link-to-page {\n\tmargin: 1em 0;\n\tpadding: 0;\n\tborder: none;\n\tfont-weight: 500;\n}\n\np > .user {\n\topacity: 0.5;\n}\n\ntd > .user,\ntd > time {\n\twhite-space: nowrap;\n}\n\ninput[type=\"checkbox\"] {\n\ttransform: scale(1.5);\n\tmargin-right: 0.6em;\n\tvertical-align: middle;\n}\n\np {\n\tmargin-top: 0.5em;\n\tmargin-bottom: 0.5em;\n}\n\n.image {\n\tborder: none;\n\tmargin: 1.5em 0;\n\tpadding: 0;\n\tborder-radius: 0;\n\ttext-align: center;\n}\n\n.code,\ncode {\n\tbackground: rgba(135, 131, 120, 0.15);\n\tborder-radius: 3px;\n\tpadding: 0.2em 0.4em;\n\tborder-radius: 3px;\n\tfont-size: 85%;\n\ttab-size: 2;\n}\n\ncode {\n\tcolor: #eb5757;\n}\n\n.code {\n\tpadding: 1.5em 1em;\n}\n\n.code-wrap {\n\twhite-space: pre-wrap;\n\tword-break: break-all;\n}\n\n.code > code {\n\tbackground: none;\n\tpadding: 0;\n\tfont-size: 100%;\n\tcolor: inherit;\n}\n\nblockquote {\n\tfont-size: 1.25em;\n\tmargin: 1em 0;\n\tpadding-left: 1em;\n\tborder-left: 3px solid rgb(55, 53, 47);\n}\n\n.bookmark {\n\ttext-decoration: none;\n\tmax-height: 8em;\n\tpadding: 0;\n\tdisplay: flex;\n\twidth: 100%;\n\talign-items: stretch;\n}\n\n.bookmark-title {\n\tfont-size: 0.85em;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\theight: 1.75em;\n\twhite-space: nowrap;\n}\n\n.bookmark-text {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.bookmark-info {\n\tflex: 4 1 180px;\n\tpadding: 12px 14px 14px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n.bookmark-image {\n\twidth: 33%;\n\tflex: 1 1 180px;\n\tdisplay: block;\n\tposition: relative;\n\tobject-fit: cover;\n\tborder-radius: 1px;\n}\n\n.bookmark-description {\n\tcolor: rgba(55, 53, 47, 0.6);\n\tfont-size: 0.75em;\n\toverflow: hidden;\n\tmax-height: 4.5em;\n\tword-break: break-word;\n}\n\n.bookmark-href {\n\tfont-size: 0.75em;\n\tmargin-top: 0.25em;\n}\n\n.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI Variable Display\", \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\"; }\n.code { font-family: \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace; }\n.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }\n.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }\n.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI Variable Display\", \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }\n.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI Variable Display\", \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }\n.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI Variable Display\", \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }\n.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI Variable Display\", \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }\n.pdf .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }\n.pdf:lang(zh-CN) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }\n.pdf:lang(zh-TW) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }\n.pdf:lang(ko-KR) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }\n.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }\n.pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }\n.pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }\n.pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }\n.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }\n.pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }\n.pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }\n.pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }\n.highlight-default {\n\tcolor: rgba(55, 53, 47, 1);\n}\n.highlight-gray {\n\tcolor: rgba(120, 119, 116, 1);\n\tfill: rgba(120, 119, 116, 1);\n}\n.highlight-brown {\n\tcolor: rgba(159, 107, 83, 1);\n\tfill: rgba(159, 107, 83, 1);\n}\n.highlight-orange {\n\tcolor: rgba(217, 115, 13, 1);\n\tfill: rgba(217, 115, 13, 1);\n}\n.highlight-yellow {\n\tcolor: rgba(203, 145, 47, 1);\n\tfill: rgba(203, 145, 47, 1);\n}\n.highlight-teal {\n\tcolor: rgba(68, 131, 97, 1);\n\tfill: rgba(68, 131, 97, 1);\n}\n.highlight-blue {\n\tcolor: rgba(51, 126, 169, 1);\n\tfill: rgba(51, 126, 169, 1);\n}\n.highlight-purple {\n\tcolor: rgba(144, 101, 176, 1);\n\tfill: rgba(144, 101, 176, 1);\n}\n.highlight-pink {\n\tcolor: rgba(193, 76, 138, 1);\n\tfill: rgba(193, 76, 138, 1);\n}\n.highlight-red {\n\tcolor: rgba(212, 76, 71, 1);\n\tfill: rgba(212, 76, 71, 1);\n}\n.highlight-default_background {\n\tcolor: rgba(55, 53, 47, 1);\n}\n.highlight-gray_background {\n\tbackground: rgba(241, 241, 239, 1);\n}\n.highlight-brown_background {\n\tbackground: rgba(244, 238, 238, 1);\n}\n.highlight-orange_background {\n\tbackground: rgba(251, 236, 221, 1);\n}\n.highlight-yellow_background {\n\tbackground: rgba(251, 237, 214, 1);\n}\n.highlight-teal_background {\n\tbackground: rgba(237, 243, 236, 1);\n}\n.highlight-blue_background {\n\tbackground: rgba(231, 243, 248, 1);\n}\n.highlight-purple_background {\n\tbackground: rgba(244, 240, 247, 0.8);\n}\n.highlight-pink_background {\n\tbackground: rgba(249, 238, 243, 0.8);\n}\n.highlight-red_background {\n\tbackground: rgba(253, 235, 236, 1);\n}\n.block-color-default {\n\tcolor: inherit;\n\tfill: inherit;\n}\n.block-color-gray {\n\tcolor: rgba(120, 119, 116, 1);\n\tfill: rgba(120, 119, 116, 1);\n}\n.block-color-brown {\n\tcolor: rgba(159, 107, 83, 1);\n\tfill: rgba(159, 107, 83, 1);\n}\n.block-color-orange {\n\tcolor: rgba(217, 115, 13, 1);\n\tfill: rgba(217, 115, 13, 1);\n}\n.block-color-yellow {\n\tcolor: rgba(203, 145, 47, 1);\n\tfill: rgba(203, 145, 47, 1);\n}\n.block-color-teal {\n\tcolor: rgba(68, 131, 97, 1);\n\tfill: rgba(68, 131, 97, 1);\n}\n.block-color-blue {\n\tcolor: rgba(51, 126, 169, 1);\n\tfill: rgba(51, 126, 169, 1);\n}\n.block-color-purple {\n\tcolor: rgba(144, 101, 176, 1);\n\tfill: rgba(144, 101, 176, 1);\n}\n.block-color-pink {\n\tcolor: rgba(193, 76, 138, 1);\n\tfill: rgba(193, 76, 138, 1);\n}\n.block-color-red {\n\tcolor: rgba(212, 76, 71, 1);\n\tfill: rgba(212, 76, 71, 1);\n}\n.block-color-default_background {\n\tcolor: inherit;\n\tfill: inherit;\n}\n.block-color-gray_background {\n\tbackground: rgba(241, 241, 239, 1);\n}\n.block-color-brown_background {\n\tbackground: rgba(244, 238, 238, 1);\n}\n.block-color-orange_background {\n\tbackground: rgba(251, 236, 221, 1);\n}\n.block-color-yellow_background {\n\tbackground: rgba(251, 237, 214, 1);\n}\n.block-color-teal_background {\n\tbackground: rgba(237, 243, 236, 1);\n}\n.block-color-blue_background {\n\tbackground: rgba(231, 243, 248, 1);\n}\n.block-color-purple_background {\n\tbackground: rgba(244, 240, 247, 0.8);\n}\n.block-color-pink_background {\n\tbackground: rgba(249, 238, 243, 0.8);\n}\n.block-color-red_background {\n\tbackground: rgba(253, 235, 236, 1);\n}\n.select-value-color-uiBlue { background-color: rgba(35, 131, 226, .07); }\n.select-value-color-pink { background-color: rgba(245, 224, 233, 1); }\n.select-value-color-purple { background-color: rgba(232, 222, 238, 1); }\n.select-value-color-green { background-color: rgba(219, 237, 219, 1); }\n.select-value-color-gray { background-color: rgba(227, 226, 224, 1); }\n.select-value-color-transparentGray { background-color: rgba(227, 226, 224, 0); }\n.select-value-color-translucentGray { background-color: rgba(0, 0, 0, 0.06); }\n.select-value-color-orange { background-color: rgba(250, 222, 201, 1); }\n.select-value-color-brown { background-color: rgba(238, 224, 218, 1); }\n.select-value-color-red { background-color: rgba(255, 226, 221, 1); }\n.select-value-color-yellow { background-color: rgba(249, 228, 188, 1); }\n.select-value-color-blue { background-color: rgba(211, 229, 239, 1); }\n.select-value-color-pageGlass { background-color: undefined; }\n.select-value-color-washGlass { background-color: undefined; }\n\n.checkbox {\n\tdisplay: inline-flex;\n\tvertical-align: text-bottom;\n\twidth: 16;\n\theight: 16;\n\tbackground-size: 16px;\n\tmargin-left: 2px;\n\tmargin-right: 5px;\n}\n\n.checkbox-on {\n\tbackground-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E\");\n}\n\n.checkbox-off {\n\tbackground-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E\");\n}\n\t\n",
            }}
          />
          <article
            id="be14a522-873c-4e45-984b-2d122dab8b01"
            className="page sans"
          >
            <header>
              <div className="page-header-icon">
                {' '}
                <img className="icon" src={icon} alt="Icon" />
              </div>
              <h1 className="page-title">Van-Hung Ngo </h1>
              <p className="page-description" />
            </header>
            <div className="page-body">
              <h2 id="ecc205ce-e768-4673-81e4-118becee479e">
                <strong>Software Engineer</strong>
              </h2>
              <div
                id="e5b8a61d-3ffc-4535-b9a9-2a824aeab90e"
                className="column-list"
              >
                <div
                  id="2895bdcb-eb33-4c95-9574-a8a2385848d2"
                  style={{ width: '50%' }}
                  className="column"
                >
                  <p id="bcaa57dd-f42c-4135-ba64-f6840c3b0ac3">
                    <strong>
                      Experienced and driven website development over 2 years.
                      Proficient in a range of programming languages and
                      dedicated to continuous learning and innovation.
                    </strong>
                  </p>
                  <p id="9c97454b-dd02-41ae-8b90-b9492ae4e87d">
                    <strong>Strong proficiency in .NET core and REACT.</strong>
                  </p>
                </div>
                <div
                  id="42511595-1c46-4d86-ba2f-8f4dc0e29b85"
                  style={{ width: '50%' }}
                  className="column"
                >
                  <p id="1b8b1d49-5632-4d58-8238-0143f68acd8e">
                    📲 (+84)8-9999-4867
                  </p>
                  <p id="9cffc951-9009-44ef-bb97-e6381886493f">
                    ✉️ hungngo95nt@gmail.com
                  </p>
                  <p id="45aeebfd-1c82-409d-98db-45419055779c">
                    🗺️ Ho Chi Minh City
                  </p>
                  <p id="40371c56-2c26-4a61-be1f-f1d1d2c60c5f">🇻🇳 Vietnamese</p>
                </div>
              </div>
              <hr id="c677c4c3-f18d-4ec2-90e2-8133af7dc229" />
              <h2 id="18ee5879-ff00-4073-a480-1e72f24febd5">⭐&nbsp;Skills</h2>
              <div
                id="926fbe46-8dec-414b-bd3a-ec8a34ace41b"
                className="column-list"
              >
                <div
                  id="717d3354-2cff-43ed-9a1e-780b248c4334"
                  style={{ width: '50%' }}
                  className="column"
                >
                  <ul
                    id="cf562c60-3e13-46f2-8171-f82d670b0f17"
                    className="bulleted-list"
                  >
                    <li style={{ listStyleType: 'disc' }}>
                      <strong>BACKEND</strong> [2+ yoe]
                      <br />• Ability to develop applications and backend
                      services using .NET technologies: C#, ASP.NET Core,
                      ASP.NET MVC, Web API, JQuery, CSS, and Razor Pages.
                      <br />
                    </li>
                  </ul>
                  <ul
                    id="79045755-c4c2-4db3-9f9a-62f5fcf10549"
                    className="bulleted-list"
                  >
                    <li style={{ listStyleType: 'disc' }}>
                      <strong>SOFTWARE DEVELOPMENT</strong>
                      <br />• Design and develop using appropriate software
                      design patterns to attain high reusability and
                      maintainability.
                      <br />• Write effective unit tests and integration tests
                      to ensure high-quality software delivery.
                      <br />
                      <p id="f9415d01-d525-40c7-ad1b-862a2b116f0a">
                        • In-depth knowledge of system design patterns, tiered
                        architecture, and testing practices.
                      </p>
                      <p id="503f99a4-d447-4219-b5ca-6cc7267e7cb2">
                        • Familiarity with Git and agile development
                        methodologies.
                      </p>
                    </li>
                  </ul>
                </div>
                <div
                  id="b6736b0d-3503-45e7-9e74-7d268ae8d6dd"
                  style={{ width: '49.99999999999999%' }}
                  className="column"
                >
                  <ul
                    id="595d9a16-3fe1-4ad6-802b-bce628b1964b"
                    className="bulleted-list"
                  >
                    <li style={{ listStyleType: 'disc' }}>
                      <strong>DATABASE</strong> [2+ yoe]
                      <br />• Capacity to use MongoDB, and SQL server with ease.
                      <br />
                    </li>
                  </ul>
                  <ul
                    id="c3a91c17-33f5-4f77-9b19-6a7ccf9a68b6"
                    className="bulleted-list"
                  >
                    <li style={{ listStyleType: 'disc' }}>
                      <strong>FRONTEND</strong> [1+ yoe]
                      <br />• Strong knowledge of JavaScript, HTML, and CSS.{' '}
                      <br />
                      <p id="c29cf0ea-c2b4-4345-b81c-f77e5fbdd517">
                        • Collaborate with the design team to translate UI/UX
                        designs into code.{' '}
                      </p>
                      <p id="fa97f433-24f5-4a59-93cf-2c16cb075483">
                        • Proven experience in developing web applications using
                        React and related technologies.{' '}
                      </p>
                    </li>
                  </ul>
                  <ul
                    id="d3b76a8a-9de9-4949-9d16-f460bb66e6e1"
                    className="bulleted-list"
                  >
                    <li style={{ listStyleType: 'disc' }}>
                      <strong>LANGUAGES</strong>
                      <br />
                      🏴󠁧󠁢󠁥󠁮󠁧󠁿 <br />
                      <strong>English: </strong>VNU-EPT cert: 177/400 (B1.2 CEF
                      level)
                      <p id="c8cd4453-d8fd-4ccf-bcf5-f3c7a61c137f">
                        🇨🇳 <strong>Chinese</strong>: self-learn as a hobby.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <h2 id="0c238e82-37a0-4bf6-ab75-f75c4a2baefa">
                📋&nbsp;Experience
              </h2>
              <hr id="43dfc6db-e33a-4a4b-8a12-d7c3904195d2" />
              <div
                id="efec1c29-5f3a-4914-8d79-4ce4cbbac5dd"
                className="column-list"
              >
                <div
                  id="f3dcd5a5-5ffb-47b8-b904-2c8ee24a7063"
                  style={{ width: '50%' }}
                  className="column"
                >
                  <p
                    id="0536393b-474f-430f-8da9-1cc8e65d5dc0"
                    className="block-color-blue"
                  >
                    <strong>Frontend Dev - Freelancer Team </strong>
                  </p>
                </div>
                <div
                  id="e12c1aa1-b872-4504-b87d-7c88e35a36e8"
                  style={{ width: '50%' }}
                  className="column"
                >
                  <p
                    id="3a289202-5b1a-424e-8b45-83e19abc66a9"
                    className="block-color-blue"
                  >
                    5/2023 - Present
                  </p>
                </div>
              </div>
              <blockquote id="f49818f8-6a2c-41bf-a808-3f7d46862c08">
                Team size: <strong>5</strong>
                <br />
                Responsibility: <br />
                <strong>Frontend</strong> <strong>Dev </strong>
                <br />
                Project Description: <br />
                <strong>
                  CRM website application for marketing company
                  <br />
                  <br />
                </strong>
                Technology:{' '}
                <strong>React, Redux, RESTfull API, Typescript</strong>
              </blockquote>
              <blockquote id="11ca5b81-e264-430a-9f5d-6b6f1834631f">
                Team size: <strong>5</strong>
                <br />
                Responsibility: <br />
                <strong>Frontend</strong> <strong>Dev </strong>
                <br />
                Project Description: <br />
                <strong>price-tracking website for cryptoassets</strong>
                <br />
                Technology: <br />
                <strong>React, Redux, RESTfull API, Typescript</strong>
              </blockquote>
              <p id="663b33dd-7302-45f6-b9c0-205b653d4e49">
                <br />
                <br />
                <br />
              </p>
              <div
                id="db74d826-a7f8-4a57-8111-3d278c89e592"
                className="column-list"
              >
                <div
                  id="faf83c9f-fca8-4808-b75c-e56275c53054"
                  style={{ width: '50%' }}
                  className="column"
                >
                  <p
                    id="023c7330-c8d5-4f65-b9d3-0be60cbbc26d"
                    className="block-color-blue"
                  >
                    <strong>Backend Dev - FPT Software</strong>
                  </p>
                </div>
                <div
                  id="b9b7eaa6-e17e-429d-b616-9e9f0cc4d4f6"
                  style={{ width: '50%' }}
                  className="column"
                >
                  <p
                    id="d82a5cc8-f892-4bc6-8218-752ea6968423"
                    className="block-color-blue"
                  >
                    12/2021 - Present
                  </p>
                </div>
              </div>
              <blockquote id="6ace607b-2737-444b-bbef-627c979bcb2e">
                Team size: <strong>33</strong>
                <br />
                Responsibility: <br />
                <strong>Backend Dev - Sub Teamlead</strong>
                <br />
                Project Description: <br />
                <strong>
                  Web Services for Motor Corporation ( Japan region)
                </strong>
                <br />
                Technology: <br />
                <strong>
                  C#, .NET 6, Sql Server 2019, Razor Pages, ASP.NET MVC
                </strong>
                <br />
                Time line: <br />
                <strong>12/2023 - Present</strong>
              </blockquote>
              <blockquote id="800a6c40-8d5f-497e-b288-210990b51fef">
                Team size: <strong>54</strong>
                <br />
                Responsibility: <br />
                <strong>Backend Dev </strong>
                <br />
                Project Description: <br />
                <strong>
                  Web Services for Motor Corporation ( Japan region)
                </strong>
                <br />
                Technology: <br />
                <strong>C#, ASP.NET MVC, JQuery</strong>
                <br />
                Time line: <br />
                <strong>12/2021 - 11/2023</strong>
              </blockquote>
              <blockquote id="cdacaf0f-9712-431e-aecc-040b105ee152">
                Team size: <strong>3</strong>
                <br />
                Responsibility: <br />
                <strong>Trainee </strong>
                <br />
                Project Description: <br />
                <strong>Fresher Academy</strong>
                <br />
                Technology: <br />
                <strong>.NET technologies</strong>
                <br />
                Time line: <br />
                <strong>8/2021 - 11/2021</strong>
              </blockquote>
              <div
                id="13a83425-d008-4d35-acbb-770febb71b3e"
                className="column-list"
              >
                <div
                  id="148718e4-eab8-49b4-9263-bd2e1ed9a3bd"
                  style={{ width: '50%' }}
                  className="column"
                >
                  <h2 id="541eb3a5-8a08-46cd-86f8-0b859716f5d6">
                    ✨&nbsp;Education
                  </h2>
                  <hr id="d6754123-8b7e-4881-96f7-32fe607b81b2" />
                  <ul
                    id="5688b4ee-1db2-4724-914b-8d25c1e17874"
                    className="bulleted-list"
                  >
                    <li style={{ listStyleType: 'disc' }}>
                      Bachelor of Software Engineering at the University of
                      Science Ho Chi Minh: 2014 - 2018
                    </li>
                  </ul>
                  <ul
                    id="89c2e693-440b-48dc-abcc-4f03317addc5"
                    className="bulleted-list"
                  >
                    <li style={{ listStyleType: 'disc' }}>
                      Oracle Cloud Infrastructure 2023 AI Certified Foundations
                      Associate: 11/2023
                    </li>
                  </ul>
                  <ul
                    id="dcbd6a10-2f8b-4bcb-848b-e1ec72100f6b"
                    className="bulleted-list"
                  >
                    <li style={{ listStyleType: 'disc' }}>
                      Responsive Web Design - FreeCodeCamp: 8/2021
                    </li>
                  </ul>
                </div>
                <div
                  id="ebbbbad6-426f-43f8-a08e-1e12eb07b93a"
                  style={{ width: '50%' }}
                  className="column"
                >
                  <h2 id="49ade932-7d44-4283-ad99-41e0b3efda54">
                    ⭐&nbsp;Activities
                  </h2>
                  <hr id="5201e4bc-016e-4f88-a065-a3fe88d7bfdf" />
                  <ul
                    id="163be694-c1c1-4d64-a118-acad0185a2df"
                    className="bulleted-list"
                  >
                    <li style={{ listStyleType: 'disc' }}>
                      The Champions at FHM.JPG Football 2023 season
                    </li>
                  </ul>
                  <ul
                    id="4554d644-f1ca-496a-a22a-c64df23c9171"
                    className="bulleted-list"
                  >
                    <li style={{ listStyleType: 'disc' }}>
                      Third place at FHM.JPG Football 2024 season
                    </li>
                  </ul>
                </div>
              </div>
              <p id="6d4bad8b-333a-4dfe-956e-ffa8c5a9adb4"></p>
            </div>
          </article>
          <span
            className="sans"
            style={{ fontSize: '14px', paddingTop: '2em' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
