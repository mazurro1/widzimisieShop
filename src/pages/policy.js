import React from "react"
import Layout from "../components/layout"
import PromotionsAndNews from "../components/Home/PromotionsAndNews"

const PolicyPage = props => (
  <Layout history={props.location} noImage>
    <div class="container">
      <ol>
        <li>
          Serwis zbiera w sposób automatyczny tylko informacje zawarte w plikach
          cookies.
        </li>
        <li>
          Pliki (cookies) są plikami tekstowymi, które przechowywane są w
          urządzeniu końcowym użytkownika serwisu. Przeznaczone są do
          korzystania ze stron serwisu. Przede wszystkim zawierają nazwę strony
          internetowej swojego pochodzenia, swój unikalny numer, czas
          przechowywania na urządzeniu końcowym.
        </li>
        <li>
          Operator serwisu Twoje widzimisie jest podmiotem zamieszczającym na
          urządzeniu końcowym swojego użytkownika pliki cookies oraz mającym do
          nich dostęp.
        </li>
        <li>
          Operator serwisu wykorzystuje pliki (cookies) w celu: dopasowania
          zawartości strony internetowej do indywidualnych preferencji
          użytkownika, przede wszystkim pliki te rozpoznają jego urządzenie, aby
          zgodnie z jego preferencjami wyświetlić stronę; przygotowywania
          statystyk pomagających poznaniu preferencji i zachowań użytkowników,
          analiza tych statystyk jest anonimowa i umożliwia dostosowanie
          zawartości i wyglądu serwisu do panujących trendów, statystyki stosuje
          się też do oceny popularności strony; możliwości logowania do serwisu;
          utrzymania logowania użytkownika na każdej kolejnej stronie serwisu.
        </li>
        <li>
          Serwis stosuje dwa zasadnicze rodzaje plików (cookies) - sesyjne i
          stałe. Pliki sesyjne są tymczasowe, przechowuje się je do momentu
          opuszczenia strony serwisu (poprzez wejście na inną stronę,
          wylogowanie lub wyłączenie przeglądarki). Pliki stałe przechowywane są
          w urządzeniu końcowym użytkownika do czasu ich usunięcia przez
          użytkownika lub przez czas wynikający z ich ustawień.
        </li>
        <li>
          Użytkownik może w każdej chwili dokonać zmiany ustawień swojej
          przeglądarki, aby zablokować obsługę plików (cookies) lub każdorazowo
          uzyskiwać informacje o ich umieszczeniu w swoim urządzeniu. Inne
          dostępne opcje można sprawdzić w ustawieniach swojej przeglądarki
          internetowej. Należy pamiętać, że większość przeglądarek domyślnie
          jest ustawione na akceptację zapisu plików (cookies)w urządzeniu
          końcowym.
        </li>
        <li>
          Operator Serwisu informuje, że zmiany ustawień w przeglądarce
          internetowej użytkownika mogą ograniczyć dostęp do niektórych funkcji
          strony internetowej serwisu.
        </li>
        <li>
          Pliki (cookies) z których korzysta serwis (zamieszczane w urządzeniu
          końcowym użytkownika) mogą być udostępnione jego partnerom oraz
          współpracującym z nim reklamodawcą.
        </li>
        <li>
          Informacje dotyczące ustawień przeglądarek internetowych dostępne są w
          jej menu (pomoc) lub na stronie jej producenta.
        </li>
      </ol>
    </div>
  </Layout>
)

export default PolicyPage
