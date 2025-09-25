import React, { useEffect, useState } from "react";

export default function App() {

  return (
    <div id="main"
      data-framer-hydrate-v2="{&quot;routeId&quot;:&quot;augiA20Il&quot;,&quot;localeId&quot;:&quot;default&quot;,&quot;breakpoints&quot;:[{&quot;hash&quot;:&quot;susg66&quot;,&quot;mediaQuery&quot;:&quot;(min-width: 1600px)&quot;},{&quot;hash&quot;:&quot;72rtr7&quot;,&quot;mediaQuery&quot;:&quot;(min-width: 1200px) and (max-width: 1599px)&quot;},{&quot;hash&quot;:&quot;lmks9r&quot;,&quot;mediaQuery&quot;:&quot;(min-width: 810px) and (max-width: 1199px)&quot;},{&quot;hash&quot;:&quot;wutmml&quot;,&quot;mediaQuery&quot;:&quot;(max-width: 809px)&quot;}]}"
      data-framer-ssr-released-at="2025-08-12T07:50:36.485Z" data-framer-page-optimized-at="2025-08-15T11:39:08.503Z"
      data-framer-generated-page="">
      <style data-framer-html-style="">{`
        html body {
          background: rgb(255, 255, 255);
        }
      `}</style>
      <div data-framer-root="" class="framer-0kyp1 framer-miKoZ framer-no3c6 framer-cNg3u framer-kC75U framer-72rtr7"
        style="min-height:100vh;width:auto">
        <nav class="framer-1issx4h" data-framer-name="Navigation">
          <div class="framer-4s33cj">
            <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0"
              data-framer-background-image-wrapper="true"><img decoding="async" width="161" height="32"
                src="/footballfiworld_files/Logo.png" alt=""
                style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:contain"/>
            </div>
          </div>
          <div class="framer-17kvdql" data-framer-name="Button" id="17kvdql" tabindex="0" onclick="footballFi()">
            <div class="framer-hpj373"
              style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none"
              data-framer-component-type="RichTextContainer">
              <p style="--font-selector:SW50ZXItU2VtaUJvbGQ=;--framer-font-family:&quot;Inter&quot;, &quot;Inter Placeholder&quot;, sans-serif;--framer-font-weight:600;--framer-line-height:1.5em;--framer-text-alignment:center;--framer-text-color:rgb(255, 255, 255)"
                class="framer-text">Play Now</p>
            </div>
          </div>
        </nav>
        <div class="framer-5b6ekt" data-framer-name="Wrapper">
          <div class="framer-1x7x0bp" data-framer-name="Hero">
            <div class="framer-sq1bbx" data-framer-name="Hero Comp">
              <div class="framer-i28iqe">
                <div class="framer-10wrh0g">
                  <div class="framer-19fr32" data-framer-name="GREAT MOMENTS DEFINE FOOTBALL"
                    style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none"
                    data-framer-component-type="RichTextContainer">
                    <h1 class="framer-text framer-styles-preset-2yb1pa" data-styles-preset="WjOmt0okU"><span style="display: inline-block; opacity: 1; transform: none; will-change: transform;">OWN THE MOMENTS THAT MATTER</span></h1>
                  </div>
                  <div class="framer-7clij" data-framer-name="No poors, no sybils, no android users."
                    style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none"
                    data-framer-component-type="RichTextContainer">
                    <p style="--font-selector:SW50ZXItTWVkaXVt;--framer-font-family:&quot;Inter&quot;, &quot;Inter Placeholder&quot;, sans-serif;--framer-font-weight:500;--framer-letter-spacing:-0.03em;--framer-line-height:130%;--framer-text-alignment:left;--framer-text-color:rgb(255, 255, 255)"
                      class="framer-text">No resets. No repeats. Just yours.</p>
                  </div>
                  <div class="ssr-variant hidden-lmks9r hidden-wutmml" onclick="footballFi()">
                    <div class="framer-14s6y5u-container" id="14s6y5u">
                      <a class="framer-fCCim framer-1c1v8ja framer-v-53xftv framer-2wiwkz"
                        data-framer-name="Variant 2" data-highlight="true"
                        style="background-color: var(--token-d440e2cb-fdbd-495d-81aa-2bd3da128103, rgb(255, 255, 255)); border-radius: 100px; opacity: 1;"
                        tabindex="0">
                        <div class="framer-tzxel8"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-a904545f-73b8-41bb-80d1-00757b17d9a9, rgb(0, 0, 0)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;"
                          data-framer-component-type="RichTextContainer">
                          <p style="--font-selector:SW50ZXItU2VtaUJvbGQ=;--framer-font-family:&quot;Inter&quot;, &quot;Inter Placeholder&quot;, sans-serif;--framer-font-weight:600;--framer-letter-spacing:-0.03em;--framer-text-color:var(--extracted-r6o4lv, var(--token-a904545f-73b8-41bb-80d1-00757b17d9a9, rgb(0, 0, 0)))"
                            class="framer-text">Play Now</p>
                        </div>
                      </a></div>
                  </div>
                </div>
                <div class="ssr-variant hidden-lmks9r hidden-wutmml">
                  <div class="framer-1wia3y4-container"><a
                    class="framer-OAyzN framer-15bacph framer-v-15bacph framer-z6zm5s"
                    data-framer-name="Variant 1" href="https://www.footballfiworld.io/#intro"
                    style="opacity: 1;">
                    <div class="framer-1wiije3" data-framer-name="Icon-Button"
                      style="background-color: rgb(255, 255, 255); border-radius: 78px; transform: rotate(-90deg); opacity: 1;">
                      <div data-framer-component-type="SVG" data-framer-name="arrow-left"
                        style="image-rendering: pixelated; flex-shrink: 0; fill: rgb(0, 0, 0); color: rgb(0, 0, 0); transform: rotate(90deg); opacity: 1;"
                        class="framer-dmhyva" aria-hidden="true">
                        <div class="svgContainer"
                          style="width:100%;height:100%;aspect-ratio:inherit"><svg
                            style="width:100%;height:100%;" viewBox="0 0 20 20"
                            preserveAspectRatio="none" width="100%" height="100%">
                            <use href="#svg-1734647063_323"></use>
                          </svg></div>
                      </div>
                    </div>
                    <div class="framer-xwrxqc" data-framer-name="FIND OUT MORE"
                      style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: rgb(255, 255, 255); --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                      data-framer-component-type="RichTextContainer">
                      <p style="--font-selector:R0Y7RE0gTW9uby1yZWd1bGFy;--framer-font-family:&quot;DM Mono&quot;, monospace;--framer-letter-spacing:-0.03em;--framer-line-height:85%;--framer-text-color:var(--extracted-r6o4lv, rgb(255, 255, 255));--framer-text-transform:uppercase"
                        class="framer-text">FIND OUT MORE</p>
                    </div>
                  </a></div>
                </div>
                <div class="framer-drvfzc-container" data-framer-appear-id="drvfzc"
                  style="opacity: 1; transform: none; will-change: transform;">
                  <div style="height:100%;width:100%"><svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 360" width="640" height="360"
                    preserveAspectRatio="xMidYMid slice"
                    style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);">
                    <defs>
                      <clippath id="__lottie_element_2">
                        <rect width="640" height="360" x="0" y="0"></rect>
                      </clippath>

                      <mask id="__lottie_element_3" mask-type="alpha">
                        <g clip-path="url(#__lottie_element_7)"
                          transform="matrix(1,0,0,1,-419,-264)" opacity="1"
                          style="display: block;">
                          <g style="display: none;">
                            <path></path>
                          </g>
                          <g clip-path="url(#__lottie_element_12)"
                            transform="matrix(1,0,0,1,0,0)" opacity="1"
                            style="display: block;">
                            <g transform="matrix(1,0,0,1,374,222.02879333496094)"
                              opacity="1" style="display: block;">
                              <path fill="rgb(0,0,0)" fill-opacity="1"
                                d=" M747.9513549804688,0 C747.9513549804688,0 0,0 0,0 C0,0 0,442.97119140625 0,442.97119140625 C0,442.97119140625 747.9513549804688,442.97119140625 747.9513549804688,442.97119140625 C747.9513549804688,442.97119140625 747.9513549804688,0 747.9513549804688,0z">
                              </path>
                            </g>
                          </g>
                        </g>
                      </mask>
                      <clippath id="__lottie_element_7">
                        <path d="M0,0 L1496,0 L1496,1330 L0,1330z"></path>
                      </clippath>
                      <clippath id="__lottie_element_12">
                        <path d="M0,0 L1122,0 L1122,1108 L0,1108z"></path>
                      </clippath>
                      <clippath id="__lottie_element_24">
                        <path d="M0,0 L898,0 L898,533 L0,533z"></path>
                      </clippath>
                      <clippath id="__lottie_element_30">
                        <path d="M0,0 L748,0 L748,443 L0,443z"></path>
                      </clippath>
                    </defs>
                    <g clip-path="url(#__lottie_element_2)">
                      <g transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;">
                        <path fill="rgb(3,6,19)" fill-opacity="0"
                          d=" M640,0 C640,0 0,0 0,0 C0,0 0,360 0,360 C0,360 640,360 640,360 C640,360 640,0 640,0z">
                        </path>
                      </g>
                      <g mask="url(#__lottie_element_3)" style="display: block;">
                        <g clip-path="url(#__lottie_element_24)"
                          transform="matrix(1,0,0,1,-120,-87)" opacity="1">
                          <g clip-path="url(#__lottie_element_30)"
                            transform="matrix(1.000012993812561,0,0,1.000012993812561,74.99514770507812,44.99711608886719)"
                            opacity="1" style="display: block;">
                            <g transform="matrix(0.38328874111175537,0,0,0.33559998869895935,-18.490999221801758,0)"
                              opacity="1" style="display: block;">

                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg></div>
                </div>
              </div>
              <div class="framer-lcrh2l">
                <div class="framer-jp2yo3-container"><video
                  src="https://framerusercontent.com/assets/ICad4zFWRRyTWAOAeSiEYWZ2Br4.mp4" loop=""
                  preload="auto" muted="" playsinline=""
                  style="cursor:auto;width:100%;height:100%;border-radius:0px;display:block;object-fit:cover;background-color:rgba(0, 0, 0, 0);object-position:50% 50%"
                  autoplay=""></video></div>
              </div>
            </div>
          </div>
          <div class="framer-ruzjuw" data-framer-name="Block">
            <div class="framer-1h4nya9" data-framer-name="Row">
              <div class="framer-n48t2u" data-framer-name="Intro" id="intro">
                <div class="ssr-variant hidden-wutmml">
                  <div class="framer-9wotbz"
                    data-framer-name="The world’s most rewarding fantasy football game."
                    style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none"
                    data-framer-component-type="RichTextContainer">
                    <h1 class="framer-text framer-styles-preset-m2b9fm" data-styles-preset="KPky8xUnj"><span
                      style="display: inline-block; opacity: 1; transform: none; will-change: transform;">The world’s most rewarding sports prediction app.</span></h1>
                  </div>
                </div>
              </div>
              <div class="ssr-variant hidden-wutmml">
                <div class="framer-kcrlgu-container" id="players">
                  <div class="framer-t1hHY framer-no3c6 framer-1tiu5nf framer-v-1tiu5nf"
                    data-framer-name="D"
                    style="border-radius: 20px; height: 100%; width: 100%; opacity: 1;">
                    <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0"
                      data-framer-background-image-wrapper="true"><img decoding="async" loading="lazy"
                        width="2800" height="1064" sizes="min(100vw - 40px, 1800px)"
                        srcset="https://framerusercontent.com/images/i6pWNEgO7C3buUBPIc2AIDa6M7Q.png?scale-down-to=512 512w,https://framerusercontent.com/images/i6pWNEgO7C3buUBPIc2AIDa6M7Q.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/i6pWNEgO7C3buUBPIc2AIDa6M7Q.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/i6pWNEgO7C3buUBPIc2AIDa6M7Q.png 2800w"
                        src="/footballfiworld_files/i6pWNEgO7C3buUBPIc2AIDa6M7Q.png" alt=""
                        style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:fill"/>
                    </div>
                    <div class="framer-180ot2d" data-framer-name="Block" style="opacity: 1;">
                      <div class="framer-z70u0m" data-framer-name="Own the Players You Love"
                        style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-gdpscs: var(--token-d440e2cb-fdbd-495d-81aa-2bd3da128103, rgb(255, 255, 255)); --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                        data-framer-component-type="RichTextContainer">
                        <h1 class="framer-text framer-styles-preset-m2b9fm"
                          data-styles-preset="KPky8xUnj"
                          style="--framer-text-color:var(--extracted-gdpscs, var(--token-d440e2cb-fdbd-495d-81aa-2bd3da128103, rgb(255, 255, 255)))"><span
                            style="display: inline-block; opacity: 1; transform: none; will-change: transform;">Own the Players You Love</span></h1>
                      </div>
                      <div class="framer-qrflrl"
                        data-framer-name="Pellentesque sit amet sapien fringilla, mattis ligula consectetur."
                        style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;--extracted-r6o4lv:rgb(255, 255, 255);--framer-paragraph-spacing:0px;opacity:0.7;transform:none"
                        data-framer-component-type="RichTextContainer">
                        <p style="--framer-line-height:130%;--framer-text-alignment:center;--framer-text-color:var(--extracted-r6o4lv, rgb(255, 255, 255))"
                          class="framer-text">The best of Europe's top 5 leagues</p>
                      </div>
                    </div>
                    <div class="framer-vsmmta" data-framer-name="Group 2085662935"
                      style="transform: none; opacity: 1;">
                      <div class="framer-ytng5m" data-framer-name="Shirt Badge"
                        style="background-color: rgb(108, 171, 221); border-radius: 12.6px; will-change: transform; opacity: 1; transform: rotate(15deg);">
                        <div class="framer-bkv6bn" data-framer-name="HK"
                          style="transform: translate(-50%, -50%); opacity: 1;">
                          <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0"
                            data-framer-background-image-wrapper="true"><img decoding="async"
                              loading="lazy" width="391" height="504"
                              src="/footballfiworld_files/0rPn9Q3f03DfsML5gu9BPdPyAYk.png" alt=""
                              style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover"/>
                          </div>
                        </div>
                      </div>
                      <div class="framer-1povld4" data-framer-name="Shirt Badge"
                        style="background-color: rgb(165, 0, 68); border-radius: 12.6px; will-change: transform; opacity: 1; transform: rotate(-15deg);">
                        <div class="framer-vu5zbq" data-framer-name="HK"
                          style="transform: translate(-50%, -50%); opacity: 1;">
                          <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0"
                            data-framer-background-image-wrapper="true"><img decoding="async"
                              loading="lazy" width="638" height="823" sizes="200px"
                              srcset="https://framerusercontent.com/images/2n07TbG8BddCpwLOWdYwalyFo.png 638w"
                              src="/footballfiworld_files/2n07TbG8BddCpwLOWdYwalyFo.png" alt=""
                              style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover"/>
                          </div>
                        </div>
                      </div>
                      <div class="framer-1j7tvi8" data-framer-name="Shirt Badge"
                        style="background-color: rgb(3, 70, 148); border-radius: 12.6px; will-change: transform; opacity: 1; transform: rotate(-5deg);">
                        <div class="framer-1n101bm" data-framer-name="HK"
                          style="transform: translate(-50%, -50%); opacity: 1;">
                          <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0"
                            data-framer-background-image-wrapper="true"><img decoding="async"
                              loading="lazy" width="639" height="823" sizes="200px"
                              srcset="https://framerusercontent.com/images/GRshFn1hReoGom6quS0OciKCjM.png 639w"
                              src="/footballfiworld_files/GRshFn1hReoGom6quS0OciKCjM.png" alt=""
                              style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover"/>
                          </div>
                        </div>
                      </div>
                      <div class="framer-4s6kgc" data-framer-name="Shirt Badge"
                        style="background-color: rgb(23, 23, 23); border-radius: 12.6px; will-change: transform; opacity: 1; transform: rotate(5deg);">
                        <div class="framer-p3wvf1" data-framer-name="HK"
                          style="transform: translate(-50%, -50%); opacity: 1;">
                          <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0"
                            data-framer-background-image-wrapper="true"><img decoding="async"
                              loading="lazy" width="392" height="504"
                              src="/footballfiworld_files/NCZA3OVHWhdShQ8i2NaUcg4j498.png" alt=""
                              style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover"/>
                          </div>
                        </div>
                      </div>
                      <div class="framer-1gw19hb" data-framer-name="Shirt Badge"
                        style="background-color: rgb(200, 16, 46); border-radius: 12.6px; will-change: transform; opacity: 1; transform: none;">
                        <div class="framer-1npor3e" data-framer-name="HK"
                          style="transform: translate(-50%, -50%); opacity: 1;">
                          <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0"
                            data-framer-background-image-wrapper="true"><img decoding="async"
                              loading="lazy" width="392" height="504"
                              src="/footballfiworld_files/gpbwAMvhucgRi8hZaSyFvMhJTM.png" alt=""
                              style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="framer-1k5ualt">
                <div class="ssr-variant hidden-wutmml">
                  <div class="framer-1jp38hy-container">
                    <div class="framer-RyyU2 framer-cNg3u framer-iz3no2 framer-v-1e0x2rs"
                      data-framer-name="Win" data-highlight="true"
                      style="background-color: rgb(202, 163, 86); height: 100%; width: 100%; opacity: 1; border-radius: 20px; will-change: auto;">
                      <div class="framer-1yoe4u6" data-framer-name="Buy"
                        style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-1of0zx5: rgb(255, 255, 255); --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                        data-framer-component-type="RichTextContainer">
                        <h2 class="framer-text framer-styles-preset-1pvpox2"
                          data-styles-preset="IQBba5sqn" style=""><span
                            style="display: inline-block;">Win</span></h2>
                      </div>
                      <div class="framer-nic9yg" data-framer-name="Win"
                        style="opacity: 1; transform: translate(-50%, -50%); will-change: transform; transform-origin: 50% 50% 0px;">
                        <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0"
                          data-framer-background-image-wrapper="true"><img decoding="async"
                            loading="lazy" width="700" height="700" sizes="349px"
                            srcset="https://framerusercontent.com/images/aqY0GLSOGXiuJTlcWMSA13hjtA.png?scale-down-to=512 512w,https://framerusercontent.com/images/aqY0GLSOGXiuJTlcWMSA13hjtA.png 700w"
                            src="/footballfiworld_files/aqY0GLSOGXiuJTlcWMSA13hjtA.png" alt=""
                            style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover"/>
                        </div>
                      </div>
                      <div class="framer-1fdilp1" data-framer-name="Compete"
                        style="opacity: 0; transform: translate(-50%, -50%); will-change: transform; transform-origin: 50% 50% 0px;">
                        <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0"
                          data-framer-background-image-wrapper="true"><img decoding="async"
                            loading="lazy" width="700" height="780" sizes="349px"
                            srcset="https://framerusercontent.com/images/IhfX3hy7K3TP6XXF3ltbtVUKxk.png 700w"
                            src="/footballfiworld_files/IhfX3hy7K3TP6XXF3ltbtVUKxk.png" alt=""
                            style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover"/>
                        </div>
                      </div>
                      <div class="framer-133i36y" data-framer-name="Buy"
                        style="opacity: 0; transform: translate(-50%, -50%); will-change: transform; transform-origin: 50% 50% 0px;">
                        <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0"
                          data-framer-background-image-wrapper="true"><img decoding="async"
                            loading="lazy" width="700" height="780" sizes="340.9254px"
                            srcset="https://framerusercontent.com/images/0B1hvMn9sdsJDYnwDjyeP4Wq5a0.png 700w"
                            src="/footballfiworld_files/0B1hvMn9sdsJDYnwDjyeP4Wq5a0.png" alt=""
                            style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="framer-17rykam" data-framer-name="Tile">
                  <div class="ssr-variant hidden-lmks9r hidden-wutmml">
                    <div class="framer-1mvgqr9" data-framer-name="Tournament"
                      style="transform:translate(-50%, -50%)">
                      <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0"
                        data-framer-background-image-wrapper="true"><img decoding="async"
                          loading="lazy" width="700" height="579" sizes="400px"
                          srcset="https://framerusercontent.com/images/VYdkxUW6hjoC7KE0TBN7hKM.png?scale-down-to=512 512w,https://framerusercontent.com/images/VYdkxUW6hjoC7KE0TBN7hKM.png 700w"
                          src="/footballfiworld_files/VYdkxUW6hjoC7KE0TBN7hKM.png" alt=""
                          style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover"/>
                      </div>
                    </div>
                  </div>
                  <div class="framer-j4c6v2" data-framer-name="Block">
                    <div class="framer-pgf4ve" data-framer-name="Skill-based rewards,not lucky guesses"
                      style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none"
                      data-framer-component-type="RichTextContainer">
                      <h2 class="framer-text framer-styles-preset-1pvpox2"
                        data-styles-preset="IQBba5sqn"
                        style="--framer-text-color:var(--token-a904545f-73b8-41bb-80d1-00757b17d9a9, rgb(0, 0, 0))"><span
                          style="display: inline-block; opacity: 1; transform: none; will-change: transform;">Skill Based Rewards</span></h2>
                    </div>
                    <div class="framer-16zy1y6"
                      data-framer-name="Pellentesque sit amet sapien fringilla, mattis ligula consectetur."
                      style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none"
                      data-framer-component-type="RichTextContainer">
                      <p class="framer-text framer-styles-preset-1v7gcqi"
                        data-styles-preset="jwshzvCYF">Build your Skill Rating and climb the rankings</p>
                    </div>
                  </div>
                </div>
                <div class="framer-16ng13r" data-framer-name="Tile">
                  <div class="ssr-variant hidden-lmks9r hidden-wutmml">
                    <div class="framer-1d5srca" data-framer-name="Leaderboard"
                      style="transform:translate(-50%, -50%)">
                      <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0"
                        data-framer-background-image-wrapper="true"><img decoding="async"
                          loading="lazy" width="701" height="435" sizes="400px"
                          srcset="https://framerusercontent.com/images/Fy57LT0LQGEMuVQi8wwnzQos.png?scale-down-to=512 512w,https://framerusercontent.com/images/Fy57LT0LQGEMuVQi8wwnzQos.png 701w"
                          src="/footballfiworld_files/Fy57LT0LQGEMuVQi8wwnzQos.png" alt=""
                          style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover"/>
                      </div>
                    </div>
                  </div>
                  <div class="framer-1f8zby6" data-framer-name="Block">
                    <div class="ssr-variant hidden-wutmml">
                      <div class="framer-18u5ly6"
                        data-framer-name="Turn your football IQinto real rewards"
                        style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none"
                        data-framer-component-type="RichTextContainer">
                        <h2 class="framer-text framer-styles-preset-1pvpox2"
                          data-styles-preset="IQBba5sqn"><span
                            style="--framer-text-color:var(--token-a904545f-73b8-41bb-80d1-00757b17d9a9, rgb(0, 0, 0))"
                            class="framer-text"><span style="display: inline-block; opacity: 1; transform: none; will-change: transform;">Turn your football IQ</span> <span style="display: inline-block; opacity: 1; transform: none; will-change: transform;">into real rewards</span></span></h2>
                      </div>
                    </div>
                    <div class="framer-16f58kv"
                      data-framer-name="Pellentesque sit amet sapien fringilla, mattis ligula consectetur."
                      style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none"
                      data-framer-component-type="RichTextContainer">
                      <p class="framer-text framer-styles-preset-1v7gcqi"
                        data-styles-preset="jwshzvCYF">Rewarding fans is our first priority</p>
                    </div>
                  </div>
                </div>
                <div class="ssr-variant hidden-wutmml">
                  <div class="framer-10z2qdl-container">
                    <div class="framer-B2TG2 framer-cNg3u framer-kC75U framer-c152so framer-v-1vj72zp"
                      data-framer-name="CP" data-highlight="true"
                      style="background-color: rgb(3, 70, 148); height: 100%; width: 100%; opacity: 1; border-radius: 20px; will-change: auto;">
                      <div class="framer-tgtqf9" data-framer-name="Block" style="opacity: 1;">
                        <div class="framer-oyl8qd"
                          data-framer-name="Trade the world&#39;s top stars"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-1of0zx5: rgb(255, 255, 255); --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                          data-framer-component-type="RichTextContainer">
                          <h2 class="framer-text framer-styles-preset-1pvpox2"
                            data-styles-preset="IQBba5sqn"
                            style="--framer-text-color:var(--extracted-1of0zx5, rgb(255, 255, 255))"><span
                              style="display: inline-block; will-change: transform;">Trade the world's top stars</span></h2>
                        </div>
                        <div class="framer-mm3as3"
                          data-framer-name="Build your squad from the best players in the top 5 European leagues"
                          style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;--extracted-r6o4lv:rgb(255, 255, 255);--framer-paragraph-spacing:0px;opacity:0.7;transform:none"
                          data-framer-component-type="RichTextContainer">
                          <p class="framer-text framer-styles-preset-1v7gcqi"
                            data-styles-preset="jwshzvCYF"
                            style="--framer-text-color:var(--extracted-r6o4lv, rgb(255, 255, 255))">Build your squad from the best players in the top 5 European leagues
                          </p>
                        </div>
                      </div>
                      <div class="framer-1edstzd" data-framer-name="LY"
                        style="opacity: 0; transform: translateX(-50%) scale(0.9); will-change: transform; transform-origin: 50% 50% 0px;">
                        <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0"
                          data-framer-background-image-wrapper="true"><img decoding="async"
                            loading="lazy" width="638" height="823"
                            sizes="calc(392.5308 / 1.29)"
                            srcset="https://framerusercontent.com/images/2n07TbG8BddCpwLOWdYwalyFo.png 638w"
                            src="/footballfiworld_files/2n07TbG8BddCpwLOWdYwalyFo.png" alt=""
                            style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover"/>
                        </div>
                      </div>
                      <div class="framer-vkmpvo" data-framer-name="HK"
                        style="opacity: 0; transform: translateX(-50%) scale(0.9, 0.9); will-change: transform; transform-origin: 50% 50% 0px;">
                        <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0"
                          data-framer-background-image-wrapper="true"><img decoding="async"
                            loading="lazy" width="639" height="823"
                            sizes="calc(392.5308 / 1.29)"
                            srcset="https://framerusercontent.com/images/lUpUJ8qzTwwWIbOtxGpr7YmhaTc.png 639w"
                            src="/footballfiworld_files/lUpUJ8qzTwwWIbOtxGpr7YmhaTc.png" alt=""
                            style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover"/>
                        </div>
                      </div>
                      <div class="framer-b3fq5d" data-framer-name="CP"
                        style="opacity: 1; transform: translateX(-50%); will-change: transform; transform-origin: 50% 50% 0px;">
                        <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0"
                          data-framer-background-image-wrapper="true"><img decoding="async"
                            loading="lazy" width="639" height="823"
                            sizes="calc(392.5308 / 1.29)"
                            srcset="https://framerusercontent.com/images/GRshFn1hReoGom6quS0OciKCjM.png 639w"
                            src="/footballfiworld_files/GRshFn1hReoGom6quS0OciKCjM.png" alt=""
                            style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover"/>
                        </div>
                      </div>
                      <div class="framer-jjlpqe" data-framer-name="BF"
                        style="opacity: 0; transform: translateX(-50%) scale(0.9);">
                        <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0"
                          data-framer-background-image-wrapper="true"><img decoding="async"
                            loading="lazy" width="639" height="823"
                            sizes="calc(392.5308 / 1.29)"
                            srcset="https://framerusercontent.com/images/cBOPOhmG4UlRGcm8q909KNTsIsI.png 639w"
                            src="/footballfiworld_files/cBOPOhmG4UlRGcm8q909KNTsIsI.png" alt=""
                            style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover"/>
                        </div>
                      </div>
                      <div class="framer-r2kvjk" data-framer-name="KM"
                        style="opacity: 0; transform: translateX(-50%) scale(0.9);">
                        <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0"
                          data-framer-background-image-wrapper="true"><img decoding="async"
                            loading="lazy" width="639" height="823"
                            sizes="calc(392.5308 / 1.29)"
                            srcset="https://framerusercontent.com/images/BpqmXeVLzgovBcCJiUdo7QyjA.png 639w"
                            src="/footballfiworld_files/BpqmXeVLzgovBcCJiUdo7QyjA.png" alt=""
                            style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover"/>
                        </div>
                      </div>
                      <div class="framer-1rnfgbq" data-border="true" data-framer-name="Detail"
                        style="--border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.05); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; backdrop-filter: blur(27px); background-color: rgba(255, 255, 255, 0.1); opacity: 1; border-radius: 8px;">
                        <div class="framer-wbaf6o" data-framer-name="Text"
                          style="transform: none; transform-origin: 50% 50% 0px;">
                          <div class="framer-qmtyir" data-framer-name="Lamine Yamal"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: rgb(255, 255, 255); --framer-paragraph-spacing: 0px; transform: none; transform-origin: 50% 50% 0px;"
                            data-framer-component-type="RichTextContainer">
                            <p style="--font-selector:SW50ZXItU2VtaUJvbGQ=;--framer-font-family:&quot;Inter&quot;, &quot;Inter Placeholder&quot;, sans-serif;--framer-font-size:22px;--framer-font-weight:600;--framer-letter-spacing:-0.03em;--framer-line-height:120%;--framer-text-color:var(--extracted-r6o4lv, rgb(255, 255, 255))"
                              class="framer-text">Cole Palmer</p>
                          </div>
                          <div class="framer-bbclui" data-framer-name="FC Barcelona"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: rgb(255, 255, 255); --framer-paragraph-spacing: 0px; opacity: 0.7; transform: none; transform-origin: 50% 50% 0px;"
                            data-framer-component-type="RichTextContainer">
                            <p style="--framer-font-size:20px;--framer-letter-spacing:-0.03em;--framer-line-height:120%;--framer-text-color:var(--extracted-r6o4lv, rgb(255, 255, 255))"
                              class="framer-text">Chelsea</p>
                          </div>
                        </div>
                        <div class="framer-1rv1td2" data-framer-name="Value"
                          style="transform: none; transform-origin: 50% 50% 0px;">
                          <div class="framer-1rz4o5w" data-framer-name="#"
                            style="transform: none; transform-origin: 50% 50% 0px;">
                            <div class="framer-4pcbre" data-framer-name="FF Badge"
                              style="background-color: rgb(246, 188, 47); border-radius: 75px; transform: none; transform-origin: 50% 50% 0px;">
                              <div class="framer-1acv3sf" data-framer-name="FF-Mark"
                                style="transform: none; transform-origin: 50% 50% 0px;">
                                <div data-framer-component-type="SVG"
                                  data-framer-name="FF-Mark"
                                  style="image-rendering: pixelated; flex-shrink: 0; fill: rgb(0, 0, 0); color: rgb(0, 0, 0); transform: none; transform-origin: 50% 50% 0px;"
                                  class="framer-10sjcak" aria-hidden="true">
                                  <div class="svgContainer"
                                    style="width:100%;height:100%;aspect-ratio:inherit">
                                    <svg style="width:100%;height:100%;"
                                      viewBox="0 0 12 15" preserveAspectRatio="none"
                                      width="100%" height="100%">
                                      <use href="#svg1544994344_559"></use>
                                    </svg></div>
                                </div>
                              </div>
                            </div>
                            <div class="framer-1whl30h" data-framer-name="2.86"
                              style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: rgb(255, 255, 255); --framer-paragraph-spacing: 0px; transform: none; transform-origin: 50% 50% 0px;"
                              data-framer-component-type="RichTextContainer">
                              <p style="--framer-font-size:56.62px;--framer-letter-spacing:-0.04em;--framer-line-height:90%;--framer-text-color:var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                class="framer-text">2.03</p>
                            </div>
                          </div>
                          <div class="framer-cb4vn4" data-framer-name="Trend"
                            style="opacity: 0.7; transform: none; transform-origin: 50% 50% 0px;">
                            <div data-framer-component-type="SVG" data-framer-name="Icon"
                              style="image-rendering: pixelated; flex-shrink: 0; fill: rgb(0, 0, 0); color: rgb(0, 0, 0); transform: none; transform-origin: 50% 50% 0px;"
                              class="framer-18cf7o1" aria-hidden="true">
                              <div class="svgContainer"
                                style="width:100%;height:100%;aspect-ratio:inherit"><svg
                                  style="width:100%;height:100%;" viewBox="0 0 16 16"
                                  preserveAspectRatio="none" width="100%" height="100%">
                                  <use href="#svg553714263_360"></use>
                                </svg></div>
                            </div>
                            <div class="framer-bmipkw" data-framer-name="46%"
                              style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: rgb(255, 255, 255); --framer-paragraph-spacing: 0px; transform: none; transform-origin: 50% 50% 0px;"
                              data-framer-component-type="RichTextContainer">
                              <p style="--font-selector:SW50ZXItTWVkaXVt;--framer-font-family:&quot;Inter&quot;, &quot;Inter Placeholder&quot;, sans-serif;--framer-font-weight:500;--framer-letter-spacing:-0.02em;--framer-line-height:110%;--framer-text-color:var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                class="framer-text">3%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="framer-xanxeg" data-framer-name="Tile">
                <div class="framer-1slwiom" data-framer-name="Block">
                  <div class="ssr-variant hidden-wutmml">
                    <div class="framer-1hmaqhx" data-framer-name="Top 5 leagues. One live market."
                      style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none"
                      data-framer-component-type="RichTextContainer"><h2 class="framer-text framer-styles-preset-1pvpox2"
                        data-styles-preset="IQBba5sqn"><span
                          style="display: inline-block; opacity: 1; transform: none; will-change: transform;">Top 5 leagues. One live market.</span></h2>
                    </div>
                  </div>
                  <div class="framer-cfuxxi"
                    data-framer-name="Pellentesque sit amet sapien fringilla, mattis ligula consectetur."
                    style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none"
                    data-framer-component-type="RichTextContainer">
                    <p class="framer-text framer-styles-preset-1v7gcqi" data-styles-preset="jwshzvCYF">One game that is simple to learn, with lots of hidden depth</p>
                  </div>
                </div>
                <div class="ssr-variant hidden-wutmml">
                  <div class="framer-1bhz55q" data-framer-name="Market">
                    <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0"
                      data-framer-background-image-wrapper="true"><img decoding="async" loading="lazy"
                        width="1184" height="1160" sizes="592px"
                        srcset="https://framerusercontent.com/images/qgJmXMgv25n92FZioIxAb0rIeCg.png?scale-down-to=512 512w,https://framerusercontent.com/images/qgJmXMgv25n92FZioIxAb0rIeCg.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/qgJmXMgv25n92FZioIxAb0rIeCg.png 1184w"
                        src="/footballfiworld_files/qgJmXMgv25n92FZioIxAb0rIeCg.png" alt=""
                        style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ssr-variant hidden-wutmml">
                <div class="framer-uaxzk4" data-border="true" data-framer-name="Block">
                  <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0"
                    data-framer-background-image-wrapper="true"><img decoding="async" loading="lazy"
                      width="3424" height="1708" sizes="min(100vw - 40px, 1800px)"
                      srcset="https://framerusercontent.com/images/W7hMCQ0EIfwgO397w0uc7VxiwJA.png?scale-down-to=512 512w,https://framerusercontent.com/images/W7hMCQ0EIfwgO397w0uc7VxiwJA.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/W7hMCQ0EIfwgO397w0uc7VxiwJA.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/W7hMCQ0EIfwgO397w0uc7VxiwJA.png 3424w"
                      src="/footballfiworld_files/W7hMCQ0EIfwgO397w0uc7VxiwJA.png" alt=""
                      style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:fill"/>
                  </div>
                  <div class="framer-10einq8" data-framer-name="Block">
                    <div class="framer-gv004t" data-framer-name="Heading">
                      <div class="framer-1yw5g8j" data-framer-name="join now"
                        style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none"
                        data-framer-component-type="RichTextContainer">
                        <h1 class="framer-text framer-styles-preset-2yb1pa"
                          data-styles-preset="WjOmt0okU" style="--framer-text-alignment:center">join now</h1>
                      </div>
                      <div class="framer-1g1yqlf" data-framer-name="be rewarded"
                        style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none"
                        data-framer-component-type="RichTextContainer">
                        <h1 class="framer-text framer-styles-preset-2yb1pa"
                          data-styles-preset="WjOmt0okU" style="--framer-text-alignment:center"><span data-text-fill="true"
                            style="background-image:linear-gradient(0deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)"
                            class="framer-text">be rewarded</span></h1>
                      </div>
                    </div>
                    <div class="framer-1jh1n5f-container" id="1jh1n5f" onclick="footballFi()"><a
                      class="framer-fCCim framer-1c1v8ja framer-v-53xftv framer-2wiwkz"
                      data-framer-name="Variant 2" data-highlight="true"
                      style="background-color: var(--token-d440e2cb-fdbd-495d-81aa-2bd3da128103, rgb(255, 255, 255)); border-radius: 100px; opacity: 1;"
                      tabindex="0">
                      <div class="framer-tzxel8"
                        style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-a904545f-73b8-41bb-80d1-00757b17d9a9, rgb(0, 0, 0)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;"
                        data-framer-component-type="RichTextContainer">
                        <p style="--font-selector:SW50ZXItU2VtaUJvbGQ=;--framer-font-family:&quot;Inter&quot;, &quot;Inter Placeholder&quot;, sans-serif;--framer-font-weight:600;--framer-letter-spacing:-0.03em;--framer-text-color:var(--extracted-r6o4lv, var(--token-a904545f-73b8-41bb-80d1-00757b17d9a9, rgb(0, 0, 0)))"
                          class="framer-text">Play Now</p>
                      </div>
                    </a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ssr-variant hidden-wutmml">
            <div class="framer-4db1xn-container">
              <div class="framer-g4oq4 framer-QXf0Q framer-9kivf framer-rk0rjp framer-v-rk0rjp"
                data-framer-name="D" style="width: 100%; opacity: 1;">
                <div class="framer-1vcyiyl" data-framer-name="Block" style="opacity: 1;">
                  <div class="framer-d963j" style="opacity: 1;">
                    <div data-framer-component-type="SVG" data-framer-name="FF-Mark"
                      style="image-rendering: pixelated; flex-shrink: 0; fill: rgb(0, 0, 0); color: rgb(0, 0, 0); opacity: 1;"
                      class="framer-z1hqsk" aria-hidden="true">
                      <div class="svgContainer" style="width:100%;height:100%;aspect-ratio:inherit">
                        <svg style="width:100%;height:100%;" viewBox="0 0 34 40"
                          preserveAspectRatio="none" width="100%" height="100%">
                          <use href="#svg801950673_539"></use>
                        </svg></div>
                    </div>
                    <div class="framer-1yje94s" style="opacity: 1;">
                      <div class="framer-k8vupp"
                        data-framer-name="No poors, no sybils, no android users."
                        style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                        data-framer-component-type="RichTextContainer">
                        <p class="framer-text framer-styles-preset-fwprh1"
                          data-styles-preset="Px6ZwlNrO" style="--framer-text-alignment:left">Created by Football Crypto Company</p>
                      </div>
                      <div class="framer-16zx5ml"
                        data-framer-name="No poors, no sybils, no android users."
                        style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                        data-framer-component-type="RichTextContainer">
                        <p class="framer-text framer-styles-preset-fwprh1" data-styles-preset="Px6ZwlNrO" style="--framer-text-alignment:left">Residents of restricted jurisdictions are not eligible for certain functionalities of the game.<a
                          class="framer-text framer-styles-preset-185g18j"
                          data-styles-preset="TqrzBBEFA"
                          href="https://www.footballfiworld.io/legal/restrictive-legend-for-website"
                          target="_blank" rel="noopener"
                        >See full terms</a></p>
                      </div>
                    </div>
                  </div>
                  <div class="framer-205hif" style="opacity: 1;"><a
                    class="framer-1prmmbc framer-8ivnpx"
                    href="https://www.footballfiworld.io/legal/terms-of-service" style="opacity: 1;">
                    <div class="framer-1hi2esa" data-framer-name="Title"
                      style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none; opacity: 1;"
                      data-framer-component-type="RichTextContainer">
                      <p class="framer-text framer-styles-preset-fwprh1"
                        data-styles-preset="Px6ZwlNrO" style="--framer-text-alignment:center">Terms of Service</p>
                    </div>
                  </a><a class="framer-1prmmbc framer-8ivnpx"
                    href="https://www.footballfiworld.io/legal/cookie-policy" style="opacity: 1;">
                      <div class="framer-1hi2esa" data-framer-name="Title"
                        style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none; opacity: 1;"
                        data-framer-component-type="RichTextContainer">
                        <p class="framer-text framer-styles-preset-fwprh1"
                          data-styles-preset="Px6ZwlNrO" style="--framer-text-alignment:center">Cookie Policy</p>
                      </div>
                    </a><a class="framer-1prmmbc framer-8ivnpx"
                      href="https://www.footballfiworld.io/legal/legal-notice" style="opacity: 1;">
                      <div class="framer-1hi2esa" data-framer-name="Title"
                        style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none; opacity: 1;"
                        data-framer-component-type="RichTextContainer">
                        <p class="framer-text framer-styles-preset-fwprh1"
                          data-styles-preset="Px6ZwlNrO" style="--framer-text-alignment:center">Legal Notice / Imprint</p>
                      </div>
                    </a><a class="framer-1prmmbc framer-8ivnpx"
                      href="https://www.footballfiworld.io/legal/privacy-policy" style="opacity: 1;">
                      <div class="framer-1hi2esa" data-framer-name="Title"
                        style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none; opacity: 1;"
                        data-framer-component-type="RichTextContainer">
                        <p class="framer-text framer-styles-preset-fwprh1"
                          data-styles-preset="Px6ZwlNrO" style="--framer-text-alignment:center">Privacy Policy</p>
                      </div>
                    </a></div>
                  <div class="framer-1sxpxgq" style="opacity: 1;">
                    <div class="framer-ckxpm7-container" style="opacity: 1;"><a
                      class="framer-bs1Rf framer-7bxu89 framer-v-7bxu89 framer-8i4n7q"
                      data-framer-name="Discord"
                      style="background-color: rgb(246, 246, 246); border-radius: 8px; opacity: 1;"
                      href="https://discord.gg/footballfiworld" target="_blank" rel="noopener">
                      <div data-framer-component-type="SVG" data-framer-name="discord-icon 1"
                        style="image-rendering:pixelated;flex-shrink:0;fill:rgba(0,0,0,1);color:rgba(0,0,0,1);opacity:1"
                        class="framer-1aad8tu" aria-hidden="true">
                        <div class="svgContainer"
                          style="width:100%;height:100%;aspect-ratio:inherit"><svg
                            style="width:100%;height:100%;" viewBox="0 0 24 25"
                            preserveAspectRatio="none" width="100%" height="100%">
                            <use href="#svg1654530347_1313"></use>
                          </svg></div>
                      </div>
                    </a></div>
                    <div class="framer-1mox8yn-container" style="opacity: 1;"><a
                      class="framer-bs1Rf framer-7bxu89 framer-v-bv8x89 framer-8i4n7q"
                      data-framer-name="X"
                      style="background-color: rgb(246, 246, 246); border-radius: 8px; opacity: 1;"
                      href="https://x.com/footballfiworld" target="_blank" rel="noopener">
                      <div data-framer-component-type="SVG"
                        data-framer-name="X_logo_2023_original (2) 1"
                        style="image-rendering:pixelated;flex-shrink:0;fill:rgba(0,0,0,1);color:rgba(0,0,0,1);opacity:1"
                        class="framer-14jpxvq" aria-hidden="true">
                        <div class="svgContainer"
                          style="width:100%;height:100%;aspect-ratio:inherit"><svg
                            style="width:100%;height:100%;" viewBox="0 0 24 25"
                            preserveAspectRatio="none" width="100%" height="100%">
                            <use href="#svg-529116149_449"></use>
                          </svg></div>
                      </div>
                    </a></div>
                    <div class="framer-3nsuv3-container" style="opacity: 1;"><a
                      class="framer-bs1Rf framer-7bxu89 framer-v-odszkf framer-8i4n7q"
                      data-framer-name="Wiki"
                      style="background-color: rgb(246, 246, 246); border-radius: 8px; opacity: 1;"
                      href="https://footballfiworld.gitbook.io/wiki" target="_blank" rel="noopener">
                      <div data-framer-component-type="SVG"
                        data-framer-name="gitbook-svgrepo-com 1"
                        style="image-rendering:pixelated;flex-shrink:0;fill:rgba(0,0,0,1);color:rgba(0,0,0,1);opacity:1"
                        class="framer-lbup2p" aria-hidden="true">
                        <div class="svgContainer"
                          style="width:100%;height:100%;aspect-ratio:inherit"><svg
                            style="width:100%;height:100%;" viewBox="0 0 24 24"
                            preserveAspectRatio="none" width="100%" height="100%">
                            <use href="#svg1558159288_2786"></use>
                          </svg></div>
                      </div>
                    </a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="overlay"></div>
    </div>
  );
}
