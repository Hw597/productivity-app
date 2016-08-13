var bFE = document.createElement('div');
    bFE.style.cssText = 
	" position: fixed;"
    + " background-color: rgba(245, 245, 245, 0.3);"
    //+ " background-color: red;"
    + " top: 0;" 
    + " right: 0;"
    + " bottom: 0;"
    + " left: 0;"
    + " width: 100%;"
    + " height: 100%;";
document.body.appendChild(bFE);
//Layer_1 container

    
//function CreateSVG() {
    var xmlns = 'http://www.w3.org/2000/svg';

    var Layer_1 = document.createElementNS(xmlns, 'svg');
    Layer_1.setAttribute('version', '1.1');
    Layer_1.setAttribute('id', 'Layer_1');
    Layer_1.setAttribute('xmlns:xlink', "http://www.w3.org/1999/xlink");
    Layer_1.setAttribute('x', '0px');
    Layer_1.setAttribute('y', '0px');
    Layer_1.setAttribute('viewBox', '0 0 480 640');
    Layer_1.setAttribute('enable-background', 'new 0 0 480 640');
    Layer_1.setAttribute('xml:space', 'preserve');
    Layer_1.style.cssText =
        " position: fixed;"
        + " margin: auto;"
        + " top: 0;" 
        + " right: 0;"
        + " bottom: 0;"
        + " left: 0;"
        + " width: 65%;"
        + " height: 65%;";
    bFE.appendChild(Layer_1);

        var styley = document.createElementNS(xmlns, 'style');
        styley.setAttribute('type', 'text/css');
        styley.cssText = 
        //"<![CDATA["
        + " @font-face { font-family: 'PT Sans', sans-serif;"
        + " src: url(https://fonts.googleapis.com/css?family=PT+Sans); }"

        + ".qText { "
        + "  font-family: 'PT Sans', sans-serif;"
        + "  font-size: 15pt; }"

        + "#webName {font-size: 25pt; }"

        + "#rWstroke, #yButton, #nButton, .invisibleW { fill: #FFFFFF; }"

        + "#qMarkFill, #qMarkStroke, #rWfill { fill: #666666; }"

        + " #yStroke, #nStroke { "       
        +   "stroke: #FFFFFF;" 
        +   "stroke-width: 2;" 
        +   "stroke-miterlimit: 10;" 
        +   "width: 139;" 
        +   "height: 57;} "



        + "#SVGID_1_ { "
        + " stroke: #666666;"
        + " fill: none; "
        + " stroke-width: 2; "
        + " stroke-miterlimit: 10; }"


        + " .NOt { fill : #993300; } "
        + " .YESt { fill : #006699; } "

        + " #nButton:hover ~ #nStroke { stroke: #993300; } "
        + " .NOt:hover ~ #nStroke { stroke: #993300; } "

        + " #yButton:hover ~ #yStroke { stroke: #006699; } "
        + " .YESt:hover ~ #yStroke { stroke: #006699; } ";
        //+ " ]]>";
        Layer_1.appendChild(styley);

        var rWfill = document.createElementNS(xmlns, 'polygon');
        rWfill.setAttribute('class', 'responseWrap');
        rWfill.setAttribute('id', 'rWfill');
        rWfill.setAttribute('points', '0,495 290,495 290,447 339,447 339,495 480,495 480,640 0,640');
        Layer_1.appendChild(rWfill);

        var rWstroke = document.createElementNS(xmlns, 'path');
        rWstroke.setAttribute('id', 'rWstroke');
        rWstroke.setAttribute('d', 'M0,495.75c42.441,0,84.887,0,127.331,0c52.292,0,104.585,0,156.877,0c1.771,0,3.548,0,5.319,0c0.409,0,0.75-0.341,0.75-0.75c0-12.349,0-24.696,0-37.045c0-2.71,0-5.42,0-8.13c0-0.693,0-1.386,0-2.079 c0-0.926-1.239,0.325-0.34,0.325c5.395,0,10.786,0,16.179,0c7.903,0,15.809,0,23.71,0c2.52,0,5.034,0,7.554,0   c0.583,0,1.165,0,1.748,0c0.111,0-0.52-1.317-0.52-0.093c0,13.435,0,26.866,0,40.303c0,2.238,0,4.479,0,6.719   c0,0.409,0.341,0.75,0.75,0.75c46.511,0,93.021,0,139.533,0c1.688,0,0.354,0.192,0.354-0.714c0,0.644,0,1.286,0,1.929   c0,3.63,0,7.26,0,10.89c0,13.629,0,27.256,0,40.883c0,28.232,0,56.469,0,84.703c0,2.158,0,4.318,0,6.479    c0-0.882,1.293-0.668-0.688-0.668c-4.121,0-8.242,0-12.363,0c-18.673,0-37.345,0-56.018,0c-61.06,0-122.116,0-183.175,0 c-58.384,0-116.77,0-175.151,0c-15.329,0-30.657,0-45.984,0c-1.52,0-3.035,0-4.554,0c-1.9,0-0.565-0.136-0.565,0.605    c0-7.382,0-14.761,0-22.141c0-40.905,0-81.812,0-122.717c0-0.968-1.5-0.968-1.5,0c0,47.399,0,94.799,0,142.197  c0,0.935,0,1.868,0,2.803c0,0.409,0.341,0.75,0.75,0.75c30.178,0,60.354,0,90.535,0c63.1,0,126.198,0,189.3,0   c54.868,0,109.738,0,164.607,0c11.854,0,23.704,0,35.556,0c0.409,0,0.75-0.341,0.75-0.75c0-47.399,0-94.799,0-142.197   c0-0.935,0-1.868,0-2.803c0-0.409-0.341-0.75-0.75-0.75c-46.511,0-93.021,0-139.531,0c-0.365,0-0.731,0-1.099,0 c0.869,0,0.74,1.296,0.74,0.092c0-0.615,0-1.229,0-1.846c0-5.467,0-10.936,0-16.4c0-9.592,0-19.184,0-28.772    c0-0.409-0.341-0.75-0.75-0.75c-16.61,0-33.221,0-49.831,0c-0.407,0-0.75,0.341-0.75,0.75c0,12.349,0,24.694,0,37.045   c0,2.71,0,5.42,0,8.13c0,0.692,0,1.386,0,2.079c0,0.93,0.52-0.325,0.679-0.325c-1.205,0-2.41,0-3.615,0 c-19.199,0-38.397,0-57.596,0c-61.684,0-123.365,0-185.049,0c-14.397,0-28.798,0-43.195,0C-0.967,494.25-0.967,495.75,0,495.75z');
        Layer_1.appendChild(rWstroke); 

        var defs = document.createElementNS(xmlns, 'defs');
        Layer_1.appendChild(defs);

            var SVGID_4_ = document.createElementNS(xmlns, 'path');
            SVGID_4_.setAttribute('id', 'SVGID_4_');
            SVGID_4_.setAttribute('class', 'questionMark');
            SVGID_4_.setAttribute('d', 'M3.33,2.559H479v486.218l-134.116,0.873l0.705-47.102h-61.226c0,0,0-0.648,0-0.479        c0,11.636,0,46.543,0,46.543v0.043L2.635,489.192');
            defs.appendChild(SVGID_4_);

        var SVGID_5_ = document.createElementNS(xmlns, 'clipPath');
        SVGID_5_.setAttribute('id', 'SVGID_5_');
        Layer_1.appendChild(SVGID_5_);

            var u = document.createElementNS(xmlns, 'use');
            u.setAttribute('xlink:href', '#SVGID_4_');
            u.setAttribute('overflow', 'visible');
            SVGID_5_.appendChild(u);

        var g = document.createElementNS(xmlns, 'g');
        g.setAttribute('clip-path', 'url(#SVGID_5_)');
        Layer_1.appendChild(g);

            var qMarkFill = document.createElementNS(xmlns, 'path');
            qMarkFill.setAttribute('id', 'qMarkFill');
            qMarkFill.setAttribute('d', 'M418.425,190.627c0,12.099-2.234,21.451-8.685,30.929l-67.284,98.274l0.495,103.264        h-55.609V324.32c0-13.307-0.078-23.009,5.965-31.68l67.521-96.026l-0.967-101.268h-86.919l-0.993,104.76l-56.107,0.666V82.375        c0-9.876,7.73-26.189,14.399-32.441c6.67-6.247,19.08-6.968,29.296-6.968h115.688c10.417,0,21.242,3.23,27.806,9.478        c6.565,6.252,15.394,21.053,15.394,30.929V190.627z"');
            g.appendChild(qMarkFill);

            var qMarkStroke = document.createElementNS(xmlns, 'path');
            qMarkStroke.setAttribute('id', 'qMarkStroke');
            qMarkStroke.setAttribute('d', 'M415.444,190.627c-0.098,10.839-2.319,20.714-8.499,29.739        c-1.692,2.474-3.386,4.947-5.08,7.421c-7.768,11.35-15.54,22.7-23.312,34.051c-8.811,12.866-17.619,25.733-26.427,38.6        c-2.993,4.369-5.982,8.738-8.976,13.107c-1.098,1.607-3.038,3.551-3.568,5.491c-0.386,1.403-0.096,3.182-0.089,4.602        c0.019,3.863,0.037,7.728,0.056,11.59c0.06,11.746,0.114,23.494,0.17,35.241c0.083,17.542,0.168,35.083,0.253,52.625        c0.993-0.999,1.985-1.996,2.978-2.994c-18.537,0-37.072,0-55.607,0c0.992,0.998,1.986,1.995,2.979,2.994        c0-24.586,0-49.169,0-73.754c0-8.938,0-17.875,0-26.813c0.001-9.918-0.149-20.257,5.787-28.7        c1.753-2.494,3.505-4.987,5.258-7.482c16.907-24.046,33.816-48.091,50.723-72.136c2.895-4.116,5.788-8.234,8.685-12.352        c0.985-1.403,3.05-3.425,3.032-5.296c-0.086-9.031-0.173-18.06-0.26-27.09c-0.231-24.709-0.47-49.417-0.705-74.127        c-0.016-1.631-1.344-2.993-2.979-2.993c-28.973,0-57.946,0-86.918,0c-1.636,0-2.964,1.362-2.979,2.993        c-0.33,34.92-0.663,69.84-0.992,104.76c0.992-0.998,1.983-1.996,2.978-2.993c-18.702,0.222-37.405,0.443-56.107,0.666        c0.993,0.998,1.986,1.996,2.979,2.993c0-23.372,0-46.745,0-70.116c0-13.47,0-26.94,0-40.411c0-2.589,0-5.177,0-7.767        c0-9.739,5.405-20.639,11.357-28.087c8.501-10.638,25.394-8.429,37.837-8.429c13.655,0,27.31,0,40.964,0        c15.49,0,30.979,0,46.47,0c8.923,0,18.343-0.742,27.208,0.561c13.436,1.971,21.692,10.014,27.961,21.54        c3.003,5.527,4.823,11.309,4.823,17.578c0,11.26,0,22.52,0,33.78C415.444,143.155,415.444,166.891,415.444,190.627        c0,3.861,5.96,3.861,5.96,0c0-24.05,0-48.099,0-72.149c0-11.143,0-22.284,0-33.426c0-15.989-11.462-34.963-26.338-41.16        c-10.724-4.468-21.867-3.919-33.168-3.919c-14.674,0-29.35,0-44.022,0c-14.78,0-29.564,0-44.344,0        c-10.469,0-21.179-0.514-31.505,1.392c-11.32,2.089-17.746,9.504-22.825,19.344c-3.488,6.753-6.339,14.507-6.339,22.201        c0,9.37,0,18.741,0,28.112c0,28.397,0,56.795,0,85.193c0,1.519,0,3.037,0,4.555c0,1.618,1.356,3.012,2.979,2.993        c18.702-0.222,37.405-0.443,56.107-0.666c1.634-0.02,2.962-1.347,2.979-2.993c0.33-34.92,0.663-69.84,0.991-104.76        c-0.991,0.998-1.983,1.996-2.978,2.994c28.974,0,57.947,0,86.918,0c-0.993-0.998-1.987-1.996-2.979-2.994        c0.233,24.41,0.465,48.821,0.697,73.231c0.089,9.308,0.176,18.614,0.265,27.921c-0.011-1.179,0.74-1.866-0.213-0.511        c-0.834,1.187-1.668,2.372-2.502,3.558c-3.025,4.304-6.054,8.608-9.082,12.912c-16.822,23.927-33.646,47.855-50.469,71.782        c-1.582,2.248-3.164,4.496-4.744,6.744c-5.782,8.225-6.354,18.354-6.462,28.086c-0.104,9.51-0.011,19.025-0.011,28.533        c0,25.162,0,50.325,0,75.49c0,1.631,1.354,2.992,2.979,2.992c18.536,0,37.071,0,55.608,0c1.62,0,2.99-1.361,2.981-2.992        c-0.116-24.299-0.234-48.598-0.353-72.896c-0.049-9.974-0.097-19.946-0.146-29.92c-0.008-1.41-0.99,1.915-0.108,0.629        c0.667-0.979,1.338-1.957,2.006-2.937c2.736-3.995,5.473-7.989,8.208-11.985c13.761-20.1,27.523-40.2,41.284-60.301        c4.601-6.717,9.199-13.435,13.799-20.154c7.312-10.682,10.662-21.89,10.778-34.904        C421.437,186.765,415.477,186.769,415.444,190.627z');
            g.appendChild(qMarkStroke);

        var SVGID_1_ = document.createElementNS(xmlns, 'path');
        SVGID_1_.setAttribute('id', 'SVGID_1_');
        SVGID_1_.setAttribute('d', 'M3.33,2.559H479v486.218    l-134.116,0.873l0.705-47.102h-61.226c0,0,0-0.648,0-0.479c0,11.636,0,46.543,0,46.543v0.043L2.635,489.192L3.33,2.559z');
        Layer_1.appendChild(SVGID_1_);

        var yButton = document.createElementNS(xmlns, 'rect');
        yButton.setAttribute('x', '46');
        yButton.setAttribute('y', '544');
        yButton.setAttribute('class', 'YES');
        yButton.setAttribute('id', 'yButton');
        yButton.setAttribute('width', '128');
        yButton.setAttribute('height', '42');
        Layer_1.appendChild(yButton);

        var Y = document.createElementNS(xmlns, 'path');
        Y.setAttribute('class', 'YES YESt');
        Y.setAttribute('id', 'Y');
        Y.setAttribute('d', 'M90.053,580.971v-11.842l-6.795-19.094h6.427l2.111,7.389c0.552,1.975,1.146,4.271,1.605,6.563h0.092    c0.367-2.249,0.872-4.498,1.424-6.7l1.836-7.252h6.241l-6.931,18.863v12.071L90.053,580.971L90.053,580.971z');
        Layer_1.appendChild(Y);

        var E = document.createElementNS(xmlns, 'path');
        E.setAttribute('class', 'YES YESt');
        E.setAttribute('id', 'E');
        E.setAttribute('d', 'M118.143,567.385h-7.068v8.354h7.986v5.232h-13.999v-30.936h13.447v5.23h-7.437v7.114h7.068    L118.143,567.385L118.143,567.385z');
        Layer_1.appendChild(E);

        var S = document.createElementNS(xmlns, 'path');
        S.setAttribute('class', 'YES YESt');
        S.setAttribute('id', 'S');
        S.setAttribute('d', 'M122.458,574.819c1.238,0.688,3.352,1.192,5.096,1.192c2.846,0,4.222-1.47,4.222-3.487    c0-2.249-1.376-3.352-3.992-5.049c-4.223-2.57-5.829-5.829-5.829-8.629c0-4.957,3.305-9.088,9.775-9.088    c2.02,0,3.948,0.551,4.866,1.103l-0.966,5.186c-0.872-0.551-2.202-1.056-3.946-1.056c-2.57,0-3.812,1.562-3.812,3.214    c0,1.836,0.918,2.799,4.271,4.817c4.086,2.479,5.6,5.601,5.6,8.857c0,5.646-4.177,9.363-10.234,9.363    c-2.479,0-4.91-0.644-5.92-1.238L122.458,574.819z');
        Layer_1.appendChild(S);

        var nButton = document.createElementNS(xmlns, 'rect');
        nButton.setAttribute('x', '277');
        nButton.setAttribute('y', '544');
        nButton.setAttribute('class', 'NO');
        nButton.setAttribute('id', 'nButton');
        nButton.setAttribute('width', '128');
        nButton.setAttribute('height', '42');
        Layer_1.appendChild(nButton);

        var N = document.createElementNS(xmlns, 'path');
        N.setAttribute('class', 'NOt N');
        N.setAttribute('id', 'NO');
        N.setAttribute('d', 'M319.525,580.968v-30.935h5.508l4.773,12.116c0.918,2.388,2.433,6.38,3.304,9.041h0.094    c-0.185-3.259-0.598-8.629-0.598-14.319v-6.838h5.278v30.935h-5.508l-4.729-11.75c-1.01-2.616-2.434-6.517-3.122-9.317h-0.092    c0.138,3.121,0.367,7.896,0.367,14.092v6.977L319.525,580.968L319.525,580.968z');
        Layer_1.appendChild(N);

        var O = document.createElementNS(xmlns, 'path');
        O.setAttribute('class', ' NOt N');
        O.setAttribute('id', 'NO');
        O.setAttribute('d', 'M361.476,564.949c0,11.657-4.131,16.386-10.006,16.386c-7.022,0-9.776-7.437-9.776-15.927    c0-8.445,3.352-15.743,10.189-15.743C359.364,549.665,361.476,557.881,361.476,564.949z M347.936,565.5    c0,7.021,1.331,10.603,3.764,10.603c2.524,0,3.488-4.59,3.488-10.878c0-5.416-0.826-10.327-3.534-10.327    C349.267,554.897,347.936,558.845,347.936,565.5z');
        Layer_1.appendChild(O);

        var yStroke = document.createElementNS(xmlns, 'rect');
        yStroke.setAttribute('class', 'YES');
        yStroke.setAttribute('x', '41');
        yStroke.setAttribute('y', '537');
        yStroke.setAttribute('class', 'YES');
        yStroke.setAttribute('width', '139');
        yStroke.setAttribute('height', '57');
        Layer_1.appendChild(yStroke);

        var nStroke = document.createElementNS(xmlns, 'rect');
        nStroke.setAttribute('class', 'NO');
        nStroke.setAttribute('id', 'nStroke');
        nStroke.setAttribute('x', '271');
        nStroke.setAttribute('y', '537');
        nStroke.setAttribute('id', 'nStroke');
        nStroke.setAttribute('width', '139');
        nStroke.setAttribute('height', '57');
        Layer_1.appendChild(nStroke);

        var questionWrapper = document.createElementNS(xmlns, 'polygon');
        questionWrapper.setAttribute('id', 'questionWrapper');
        questionWrapper.setAttribute('fill', 'none');
        questionWrapper.setAttribute('points', '341,207 208,206 208,131 11,132 11,386 208,386');
        Layer_1.appendChild(questionWrapper);

        var text1 = document.createElementNS(xmlns, 'text');
        text1.setAttribute('transform', 'matrix(1 0 0 1 26.5002 198.5)');
        text1.setAttribute('class', 'qText');
        text1.textContent = "IS TIME SPENT AT";
        Layer_1.appendChild(text1);

        var text2 = document.createElementNS(xmlns, 'text');
        text2.setAttribute('transform', 'matrix(1 0 0 1 26.5002 306.5)');
        text2.setAttribute('class', 'qText');
        text2.textContent = "PRODUCTIVE";
        Layer_1.appendChild(text2);

        var webName = document.createElementNS(xmlns, 'text');
        webName.setAttribute('transform', 'matrix(1 0 0 1 24.5002 257.5)');
        webName.setAttribute('class', 'qText');
        webName.setAttribute('id', 'webName');
        webName.textContent = location.hostname.replace("www.", " ");
        Layer_1.appendChild(webName);
