<?php
$fb = $_GET['sub5'];

if (empty($fb) ) {
    $fb = '0';
}
?>
<!DOCTYPE html>
<html ng-app="Chat" ng-controller="MainCtrl">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Viber</title>
    <link href="./img/fav.png" rel="shortcut icon" type="image/x-icon">
    <meta name="theme-color" content="#665aac">
    <meta content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0" name="viewport">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap" rel="stylesheet">
    <link href="./css/main.css" rel="stylesheet">
    <!-- Facebook Pixel Code -->
    <script> !function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '<?php echo $fb; ?>'); fbq('track', 'PageView'); </script>
    <!-- End Facebook Pixel Code -->
</head>
<body ng-cloak>
    <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=<?php echo $fb; ?>&ev=PageView&noscript=1" /></noscript>
<div id="bar">
    <div class="container">
        <div class="header-left">
            <div>
                <div class="name">Viber</div>
            </div>
        </div>
        <div class="header-right">
            <div class="photo pull-right">
                <img src="./img/p1.jpg" alt="" class="img-responsive">
            </div>
            <div class="desc">
                <div class="name" ng-bind-html="person"></div>
                <div class="online">online</div>
            </div>
        </div>
    </div>
</div>
<div id="body">
    <div class="container body-container" id="body-container">
        <div class="list">
            <div class="message-container" ng-repeat="d in dialog track by $index">
                <div ng-if="!d.type" class="chat2 chats animated fadeIn faster" ng-class="{'user pull-right': d.who === 'user', 'photo': d.type === 'photo', 'user-photo': d.who === 'manager' && $index === 0}">
                    <p ng-if="!d.type" ng-bind-html="d.text"></p>
                </div>
                <div ng-if="d.type === 'question' || d.type === 'date'" class="chat2 chats animated fadeIn faster" ng-class="{'user pull-right': d.who === 'user', 'photo': d.type === 'photo', 'user-photo': d.who === 'manager' && $index === 0}">
                    <p ng-bind-html="d.text"></p>
                </div>
                <div class="btn-group btn-group-lg" ng-if="d.type === 'question'">
                    <button class="btn" ng-click="sendMessage(a.text, $event)" ng-repeat="a in d.answer" ng-bind-html="a.text"></button>
                </div>
                <div class="zodiak-form" id="zodiak-form" ng-if="d.type === 'date'">
                    <form name="questionForm" class="form"  novalidate>
                        <div class="form-group">
                            <div class="form-group-inline">
                                <select name="day" ng-class="{'is-invalid': questionForm.day.$error.required && questionForm.$submitted }" required="" class="custom-select" ng-change="formChange(this)" ng-model="day">
                                    <option value="">Nap</option>
                                    <option value="1">01</option>
                                    <option value="2">02</option>
                                    <option value="3">03</option>
                                    <option value="4">04</option>
                                    <option value="5">05</option>
                                    <option value="6">06</option>
                                    <option value="7">07</option>
                                    <option value="8">08</option>
                                    <option value="9">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>
                            </div>
                            <div class="form-group-inline">
                                <select name="month" ng-class="{'is-invalid': questionForm.month.$error.required && questionForm.$submitted }" required="" class="custom-select" ng-change="formChange(this)" ng-model="month">
                                    <option value="">Hónap</option>
                                    <option value="1">01</option>
                                    <option value="2">02</option>
                                    <option value="3">03</option>
                                    <option value="4">04</option>
                                    <option value="5">05</option>
                                    <option value="6">06</option>
                                    <option value="7">07</option>
                                    <option value="8">08</option>
                                    <option value="9">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                            <div class="form-group-inline year">
                                <select name="year" ng-class="{'is-invalid': questionForm.year.$error.required && questionForm.$submitted }" class="custom-select" required="" ng-change="formChange(this)" ng-model="year" >
                                    <option value="">Év</option>
                                    <option value="2000">2000</option>
                                    <option value="1999">1999</option>
                                    <option value="1998">1998</option>
                                    <option value="1997">1997</option>
                                    <option value="1996">1996</option>
                                    <option value="1995">1995</option>
                                    <option value="1994">1994</option>
                                    <option value="1993">1993</option>
                                    <option value="1992">1992</option>
                                    <option value="1991">1991</option>
                                    <option value="1990">1990</option>
                                    <option value="1989">1989</option>
                                    <option value="1988">1988</option>
                                    <option value="1987">1987</option>
                                    <option value="1986">1986</option>
                                    <option value="1985">1985</option>
                                    <option value="1984">1984</option>
                                    <option value="1983">1983</option>
                                    <option value="1982">1982</option>
                                    <option value="1981">1981</option>
                                    <option value="1980">1980</option>
                                    <option value="1979">1979</option>
                                    <option value="1978">1978</option>
                                    <option value="1977">1977</option>
                                    <option value="1976">1976</option>
                                    <option value="1975">1975</option>
                                    <option value="1974">1974</option>
                                    <option value="1973">1973</option>
                                    <option value="1972">1972</option>
                                    <option value="1971">1971</option>
                                    <option value="1970">1970</option>
                                    <option value="1969">1969</option>
                                    <option value="1968">1968</option>
                                    <option value="1967">1967</option>
                                    <option value="1966">1966</option>
                                    <option value="1965">1965</option>
                                    <option value="1964">1964</option>
                                    <option value="1963">1963</option>
                                    <option value="1962">1962</option>
                                    <option value="1961">1961</option>
                                    <option value="1960">1960</option>
                                    <option value="1959">1959</option>
                                    <option value="1958">1958</option>
                                    <option value="1957">1957</option>
                                    <option value="1956">1956</option>
                                    <option value="1955">1955</option>
                                    <option value="1954">1954</option>
                                    <option value="1953">1953</option>
                                    <option value="1952">1952</option>
                                    <option value="1951">1951</option>
                                    <option value="1950">1950</option>
                                    <option value="1949">1949</option>
                                    <option value="1948">1948</option>
                                    <option value="1947">1947</option>
                                    <option value="1946">1946</option>
                                    <option value="1945">1945</option>
                                    <option value="1944">1944</option>
                                    <option value="1943">1943</option>
                                    <option value="1942">1942</option>
                                    <option value="1941">1941</option>
                                    <option value="1940">1940</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="user-typing" ng-show="shodDialog">
                <p ng-bind-html="person + ' éppen ír…'"></p>
            </div>
            <div class="chat2 chats call-button" ng-show="callButton" ng-class="{'call-button': callButton}">
                <a class="btn " onclick="fbq('track', 'Lead'); return true;" href="tel:{{phoneNumber}}">Hívj és hallgasd meg!</a>{{phoneNumber}}
            </div>
        </div>
    </div>
    <div class="footer" ng-if="!callButton" style="bottom:-65px;">
        <p>© 2019. ABCMobile O</p>
        <p>Harju maakond, Tallinn, Peterburi tee 71-318, 11415, Estonia.</p>
        <p>Bővebb tájékoztatásért lásd a <a href="./terms.php">Felhasználási feltételeket</a> és az <a href="./policy.php">Adatvédelmi irányelveinket .</a></p>
        <p><a href="https://www.upc.hu/pdf/aszf/edsz/upc_emeltdijas_szolgaltatasok_20190624.pdf">https://www.upc.hu/</a></p>
        <p>Affiliate: mobstra.com</p>
    </div>
    <div class="footer" ng-if="callButton" ng-class="{'active': !footer}" id="footer" resize start="callButton">
        <p>További információ: ez egy szórakoztató szolgáltatás, melynek ára: <b style="font-weight: bold;">508</b> ft/perc.</p>
        <p>A szolgáltatáson felvételeket hallgathat bármely csillagjegy horoszkópjáról, bármely hónapra vonatkozóan. A szolgáltatás minden hálózatról elérhető. A szolgáltatási oldalon található gombra kattintva egy emelt díjas telefonszámra kerül átirányításra. A szolgáltatás használatával megerősíti, hogy elfogadja az általános szerződési feltételeinket, hogy elmúlt 18 éves, és hogy a kártyatulajdonos beleegyezésével történt a szolgáltatás igénybevétele. A szolgáltatást biztosítja: abcmobile oü, helyi cím: Harju maakond, Tallinn, Peterburi tee 71-318, 11415, Estonia.</p>
        <p>A magyarországi ügyfélszolgálatunk a +36 14554695 telefonszámon érhető el. e-mail üzeneteket az abcmobile.hu@silverlines.info címen várunk. Ügyfélszolgálat nyitvatartása: hétfő - péntek, 09:00 - 17:00.</p>
        <p>Bővebb tájékoztatásért lásd a <a href="./terms.php">Felhasználási feltételeket</a> és az <a href="./policy.php">Adatvédelmi irányelveinket .</a></p>
        <p><a href="https://www.upc.hu/pdf/aszf/edsz/upc_emeltdijas_szolgaltatasok_20190624.pdf">https://www.upc.hu/</a></p>
        <p>Affiliate: mobstra.com</p>
    </div>
</div>
<script type="text/javascript" src="./js/main.js"></script>
</body>
</html>