var tipuesearch = {"pages": [{'title': '課堂內容', 'text': '', 'tags': '', 'url': '課堂內容.html'}, {'title': 'W1', 'text': '\n', 'tags': '', 'url': 'W1.html'}, {'title': 'W2~W4', 'text': 'wink 轉影片 教學 \n \n', 'tags': '', 'url': 'W2~W4.html'}, {'title': 'W5~W7', 'text': 'tcc 檔名需用.c為結尾 \n 下述程式: \n 發送文字Hello, world! \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n \n \n \n #include <stdio.h> \n \xa0 \n int \xa0 main() { \n \xa0\xa0\xa0\xa0 printf( "Hello, world!\\n" ); \n \xa0\xa0\xa0\xa0 return \xa0 0 ; \n } \n \n \n \n \n \n \n \n \n 下述程式: \n 質量為 1kg 物理, 以 k=1 彈簧與 b=0.5 阻尼器連接在固定牆壁, 起始拉開 1m, 速度為０ 時放開, 求放開質量後的運動模擬. \n x ( t ) x ( t ) \xa0 表示質量拉開水平方向設為正向 x, 且為時間 t 的函式 \n 起始條件: x ( 0 ) =−2 .0 \xa0 ， x ( 0 ) =-2 .0 ， ˙ x ( 0 ) =1 x ˙ ( 0 ) =1 \n 以下利用程式定義解題: \n x = y [ 0 ] x = y [ 0 ] \n ˙ x = y [ 1 ] x ˙ = y [ 1 ] \n ¨ x = − y [ 0 ] − 0.5 ∗ y [ 1 ] x ¨ = − y [ 0 ] − 0.5 ∗ y [ 1 ] \n \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n 82 \n 83 \n 84 \n 85 \n 86 \n 87 \n 88 \n 89 \n 90 \n 91 \n 92 \n 93 \n 94 \n \n \n \n / * \xa0 Runge Kutta \xa0 for \xa0 a \xa0 set \xa0 of first order differential equations \xa0 * / \n \xa0\xa0 \xa0 \n #include <stdio.h> \n #include <math.h> \n \xa0\xa0 \xa0 \n #define N 2 /* number of first order equations */ \n #define dist 0.1 /* stepsize in t*/ \n #define MAX 30.0 /* max for t */ \n \xa0\xa0 \xa0 \n FILE \xa0 * output; \xa0 / * \xa0 internal filename \xa0 * / \n FILE \xa0 * output1; \xa0 / * \xa0 internal filename \xa0 * / \n / / \xa0 利用 pipe 呼叫 gnuplot 繪圖 \n FILE \xa0 * pipe; \n \xa0\xa0 \xa0 \n void runge4(double x, double y[], double step); \xa0 / * \xa0 Runge - Kutta function \xa0 * / \n double f(double x, double y[], \xa0 int \xa0 i); \xa0 / * \xa0 function \xa0 for \xa0 derivatives \xa0 * / \n \xa0\xa0 \xa0 \n void main(){ \n \xa0\xa0 \xa0 \n \xa0\xa0 double t, y[N]; \n \xa0\xa0 int \xa0 j; \n \xa0\xa0 \xa0 \n \xa0\xa0 output = fopen( "osc.dat" , \xa0 "w" ); \xa0 / * \xa0 external filename \xa0 * / \n \xa0\xa0 output1 = fopen( "osc1.dat" , \xa0 "w" ); \xa0 / * \xa0 external filename \xa0 * / \n \xa0\xa0 \xa0 \n \xa0\xa0 y[ 0 ] = 1.0 ; \xa0 / * \xa0 initial position \xa0 * / \n \xa0\xa0 y[ 1 ] = - 2.0 ; \xa0 / * \xa0 initial velocity \xa0 * / \n \xa0\xa0 \xa0 \n \xa0\xa0 / / fprintf(output, \xa0 "0\\t%f\\n" , y[ 0 ]); \n \xa0\xa0 \xa0 \n \xa0\xa0 for \xa0 (j = 1 ; j * dist< = MAX \xa0 ;j + + ) \xa0 / * \xa0 time loop \xa0 * / { \n \xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 t = j * dist; \n \xa0\xa0\xa0\xa0 runge4(t, y, dist); \n \xa0\xa0\xa0\xa0 fprintf(output, \xa0 "%f\\t%f\\n" , t, y[ 0 ]); \n \xa0\xa0\xa0\xa0 fprintf(output1, \xa0 "%f\\t%f\\n" , t, y[ 1 ]); \n \xa0\xa0 } \n \xa0\xa0 \xa0 \n \xa0\xa0 fclose(output); \n \xa0\xa0 fclose(output1); \n \xa0\xa0 \xa0 \n \xa0\xa0 pipe \xa0 = \xa0 popen( "gnuplot -persist" , "w" ); \n \xa0\xa0 / / fprintf(pipe, "set term png enhanced font \\"v:/fireflysung.ttf\\" 18 \\n" ); \n \xa0\xa0 fprintf(pipe, "set term png enhanced font \\"y:/wqy-microhei.ttc\\" 18 \\n" ); \n \xa0\xa0 / / fprintf(pipe, "set yrange [68:70]\\n" ); \n \xa0\xa0 fprintf(pipe, "set output \\"test.png\\"\\n" ); \n \xa0\xa0 fprintf(pipe, \xa0 "plot \\"osc.dat\\" title \\"位移\\" with lines, \\"osc1.dat\\" title \\"速度\\" with lines\\n" ); \n \xa0\xa0 fprintf(pipe, "quit\\n" ); \n \xa0 \xa0 \n \xa0\xa0 fprintf(pipe, "quit\\n" ); \n \xa0\xa0 pclose(pipe); \n } \n \xa0\xa0 \xa0 \n void runge4(double x, double y[], double step){ \n \xa0\xa0 \xa0 \n \xa0\xa0 double h = step / 2.0 , \xa0 / * \xa0 the midpoint \xa0 * / \n \xa0\xa0 t1[N], t2[N], t3[N], \xa0 / * \xa0 temporary storage arrays \xa0 * / \n \xa0\xa0 k1[N], k2[N], k3[N],k4[N]; \xa0 / * \xa0 for \xa0 Runge - Kutta \xa0 * / \n \xa0\xa0 int \xa0 i; \n \xa0\xa0 \xa0 \n \xa0\xa0 for \xa0 (i = 0 ;i<N;i + + ){ \n \xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 t1[i] = y[i] + 0.5 * (k1[i] = step * f(x,y,i)); \n \xa0\xa0 } \n \xa0\xa0 \xa0 \n \xa0\xa0 for \xa0 (i = 0 ;i<N;i + + ){ \n \xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 t2[i] = y[i] + 0.5 * (k2[i] = step * f(x + h, t1, i)); \n \xa0\xa0 } \n \xa0\xa0 \xa0 \n \xa0\xa0 for \xa0 (i = 0 ;i<N;i + + ){ \n \xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 t3[i] = y[i] + \xa0 (k3[i] = step * f(x + h, t2, i)); \n \xa0\xa0 } \n \xa0\xa0 \xa0 \n \xa0\xa0 for \xa0 (i = 0 ;i<N;i + + ){ \n \xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 k4[i] = \xa0 step * f(x + step, t3, i); \n \xa0\xa0 } \n \xa0\xa0 \xa0 \n \xa0\xa0 for \xa0 (i = 0 ;i<N;i + + ){ \n \xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 y[i] + = (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]) / 6.0 ; \n \xa0\xa0 } \n } \n \xa0\xa0 \xa0 \n double f(double x, double y[], \xa0 int \xa0 i){ \n \xa0\xa0 \xa0 \n \xa0\xa0 if \xa0 (i = = 0 ) \n \xa0\xa0\xa0\xa0 x = y[ 1 ]; \xa0 / * \xa0 derivative of first equation \xa0 * / \n \xa0\xa0 if \xa0 (i = = 1 ) \n \xa0\xa0\xa0\xa0 x = - y[ 0 ] - 0.5 * y[ 1 ]; \n \xa0\xa0 return \xa0 x; \n } \n \n \n \n \n \n \n \n \n \n 並產生數值運算結果: \n \n', 'tags': '', 'url': 'W5~W7.html'}, {'title': 'W10', 'text': '右下角gitter會議內容 \n \n W10:了解組員進度與發生的問題狀況 \n W11:題目暫定為桌上曲棍球 \n \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '階梯上升機構 \n 階梯框架 \n 階梯組合.stl \n 階梯組合.iam \n \n 階梯 \n \n 軸 \n \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': 'W12: \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': 'CoppeliaSim \n Compile Solvespace 快捷鍵 \n \n CTRL+O： 打開一個場景 \n CTRL+N：打開一個新場景 \n CTRL+S：保存場景 \n CTRL+W： 關閉場景 \n CTRL+Q： 退出應用程式 \n CTRL+<space>： 開始/停止模擬 \n CTRL+E：按E一下/二下/三下，分別為調整場景/調整物體方向/調整物體角度 \n CTRL+D： 打開對象屬性對話框 \n CTRL+G： 打開計算模塊對話框 \n \n CoppeliaSim \n 創建圓球:add--> Proximity sensor -->sphere ，x可調大 \n :可以調整物體方向，(x,y,z)調整3維座標 小 \n \n 按照 CoppeliaSim的 教學製作的成品: \n Tutorials \n \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': '', 'tags': '', 'url': 'W14.html'}, {'title': 'NOTE', 'text': 'proxy: \n \n Web: a.kmol.info:88 \n', 'tags': '', 'url': 'NOTE.html'}, {'title': 'Code', 'text': '網頁: \n *加入指令框 \n <pre class="brush:js;auto-links:false;toolbar:false" contenteditable="false"></pre> \n \n *將gitter聊天室加入網站 \n 將群組域名放入此網站 Sidecar \n <script>// <![CDATA[ ((window.gitter = {}).chat = {}).options = { \xa0\xa0\xa0 room: \' 群組域名 \' \xa0 }; // ]]></script> <script src="https://sidecar.gitter.im/dist/sidecar.v1.js"></script> \n \n *文字大小 \n <font size=" 尺寸 "> 指定的文字 </font> \n \n *超連結 \n <a href=" 網址 "> 顯示名稱 </a> \n', 'tags': '', 'url': 'Code.html'}, {'title': 'VPN', 'text': '1.Set up a new connection or network \n \n 2.Connect to a workplace \n 3.Use my internet connection (VPN) \n \n 4.Type the internet address to connect to \n \n https://www.vpngate.net/cn/ 複製位置(盡量選擇人數少速度快的位置) \n \n 5.進入內容 \n \n 進階設定 \n \n 6.完成 \n', 'tags': '', 'url': 'VPN.html'}, {'title': 'ssh建立', 'text': '建立公鑰(public key) \n \n \n \n \n \n \n 1 \n \n \n \n 打exit可以離開sh模式 \n \n \n \n \n \n \n \n \n 設定儲存路徑 \n \n \n \n \n \n \n 1 \n \n \n \n /y(目錄名)/home(資料夾名稱)/.ssh(創建的資料夾名稱)/40823125(創建的檔案名) \n \n \n \n \n \n \n \n \n 載入 \n \n \n 創建密鑰(private key)(ppk檔) \n \n 設定github ssh key \n \n \n 設定putty \n \n 加入到.ssh中取名為comfig \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n \n \n \n ProxyCommand y: / putty / plink.exe github.com  % h  % p \n \xa0 \xa0 \n Host github.com \n \xa0\xa0\xa0\xa0 User git \n \xa0\xa0\xa0\xa0 Port  22 \n \xa0\xa0\xa0\xa0 Hostname github.com \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 TCPKeepAlive yes \n \xa0\xa0\xa0\xa0 IdentitiesOnly yes \n \n \n \n \n \n \n \n 將cad2020中.git目錄下的config改為 \n \n \n \n \n \n \n 1 \n 2 \n \n \n \n #url = https://github.com/40823125/cad2020.git \n \xa0\xa0\xa0\xa0 url = git@github.com:40823125/cad2020.git \n \n \n \n \n \n \n', 'tags': '', 'url': 'ssh建立.html'}]};