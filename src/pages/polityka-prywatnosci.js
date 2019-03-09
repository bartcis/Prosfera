import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import { theme } from '../components/utils/theme';

import SEO from '../components/seo';
import BlockHeader from '../components/blockHeader';
import Footer from '../components/footer';

import BlockWrapper from '../components/partials/blockWrapper';
import H3 from '../components/partials/H3';
import Text from '../components/partials/Text';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  a {
    color: ${({theme}) => theme.colors.blue};
  }
`;

const PivacyText = styled(Text)`
    max-width: 100%;
    text-align: left;
`;

const PrivacyPolicy = () => (
  <ThemeProvider theme={theme}>
    <>
      <SEO title='Home' keywords={[`prosfera`, `wentylacje`, `zabezpieczenia p poz`]} />
      <GlobalStyle/>
      <BlockHeader/>
        <BlockWrapper>
            <H3>§.1 Postanowienia Ogólne</H3>
            <PivacyText>Administratorem danych jest [nazwa firmy] z siedzibą w [miejscowość, adres], wpisanej do Rejestru Przedsiębiorców pod numerem KRS:  [numer], dla której akta rejestrowe prowadzi Sąd [nazwa sądu, miejscowość, nazwa wydziału], Wydział Gospodarczy Krajowego Rejestru Sądowego, NIP: [numer], REGON: [numer]. Ochrona danych odbywa się zgodnie z wymogami powszechnie obowiązujących przepisów prawa, a ich przechowywanie ma miejsce na zabezpieczonych serwerach.
                Dla interpretacji terminów stosuje się słowniczek Regulaminu lub tak jak zostało to opisane w Polityce Prywatności (jeżeli wynika to bezpośrednio z opisu).
                Na potrzeby lepszego odbioru Polityki Prywatności termin „Użytkownik” zastąpiony został określeniem „Ty”,  „Administrator” – „My”. Termin „RODO” oznacza Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE.
                Szanujemy prawo do prywatności i dbamy o bezpieczeństwo danych. W tym celu używany jest m.in. bezpieczny protokół szyfrowania komunikacji (SSL).
                Dane osobowe podawane w formularzu na landing page’u są traktowane jako poufne i nie są widoczne dla osób nieuprawnionych.</PivacyText>
            <H3>§2. Administrator Danych</H3>
            <PivacyText>
                Usługodawca jest administratorem danych swoich klientów. Oznacza to, że jeśli posiadasz Konto na naszej stronie, to przetwarzamy Twoje dane jak: imię, nazwisko, adres e-mail, numer telefonu, stanowisko, miejsce pracy, adres IP.
                Usługodawca jest także administratorem osób zapisanych na [przykładowo] newsletter i osób zapisanych na webinar.
                Dane osobowe przetwarzane są:a. zgodnie z przepisami dotyczącymi ochrony danych osobowych,b. zgodnie z wdrożoną Polityką Prywatności,c. w zakresie i celu niezbędnym do nawiązania, ukształtowania treści Umowy, zmiany bądź jej rozwiązania oraz prawidłowej realizacji Usług świadczonych drogą elektroniczną,d. w zakresie i celu niezbędnym do wypełnienia uzasadnionych interesów (prawnie usprawiedliwionych celów), a przetwarzanie nie narusza praw i wolności osoby, której dane dotyczą:
                w zakresie i celu zgodnym ze zgodą wyrażoną przez Ciebie jeśli [przykładowo] zapisałeś się na newsletter,
                w zakresie i celu zgodnym z wyrażoną przez Ciebie zgodą jeżeli [przykładowo] zapisałeś się na webinar.
            </PivacyText>
            <PivacyText>
                Każda osoba, której dane dotyczą (jeżeli jesteśmy ich administratorem) ma prawo dostępu do danych, sprostowania, usunięcia lub ograniczenia przetwarzania, prawo sprzeciwu, prawo wniesienia skargi do organu nadzorczego.
                Kontakt z osobą nadzorującą przetwarzanie danych osobowych w organizacji Usługodawcy jest możliwy drogą elektroniczną pod adresem e-mail: [adres].
                Zastrzegamy sobie prawo do przetwarzania Twoich danych po rozwiązaniu Umowy lub cofnięciu zgody tylko w zakresie na potrzeby dochodzenia ewentualnych roszczeń przed sądem lub jeżeli przepisy krajowe albo unijne bądź prawa międzynarodowego obligują nas do retencji danych.
                Usługodawca ma prawo udostępniać dane osobowe Użytkownika oraz innych jego danych podmiotom upoważnionym na podstawie właściwych przepisów prawa (np. organom ścigania).
                Usunięcie danych osobowych może nastąpić na skutek cofnięcia zgody bądź wniesienia prawnie dopuszczalnego sprzeciwu na przetwarzanie danych osobowych.
                Usługodawca nie udostępniania danych osobowych innym podmiotom aniżeli upoważnionym na podstawie właściwych przepisów prawa.
                Wdrożyliśmy pseudonimizację, szyfrowanie danych oraz mamy wprowadzoną kontrolę dostępu dzięki czemu minimalizujemy skutki ewentualnego naruszenia bezpieczeństwa danych.
                Dane osobowe przetwarzają osoby wyłącznie upoważnione przez nas albo przetwarzający, z którymi ściśle współpracujemy.
            </PivacyText>
            <H3>§3. Pliki cookies</H3>
            <PivacyText>
                Witryna [adres] używa cookies. Są to niewielkie pliki tekstowe wysyłane przez serwer www i przechowywane przez oprogramowanie komputera przeglądarki. Kiedy przeglądarka ponownie połączy się ze stroną, witryna rozpoznaje rodzaj urządzenia, z którego łączy się użytkownik. Parametry pozwalają na odczytanie informacji w nich zawartych jedynie serwerowi, który je utworzył. Cookies ułatwiają więc korzystanie z wcześniej odwiedzonych witryn.
                Gromadzone informacje dotyczą adresu IP, typu wykorzystywanej przeglądarki, języka, rodzaju systemu operacyjnego, dostawcy usług internetowych, informacji o czasie i dacie, lokalizacji oraz informacji przesyłanych do witryny za pośrednictwem formularza kontaktowego.
            </PivacyText>
            <PivacyText>
                Zebrane dane służą do monitorowania i sprawdzenia, w jaki sposób użytkownicy korzystają z naszych witryn, aby usprawniać funkcjonowanie serwisu zapewniając bardziej efektywną i bezproblemową nawigację. Monitorowania informacji o użytkownikach dokonujemy korzystając z narzędzia Google Analytics, które rejestruje zachowanie użytkownika na stronie.
                Cookies identyfikuje użytkownika, co pozwala na dopasowanie treści witryny, z której korzysta, do jego potrzeb. Zapamiętując jego preferencje, umożliwia odpowiednie dopasowanie skierowanych do niego reklam. Stosujemy pliki cookies, aby zagwarantować najwyższy standard wygody naszego serwisu, a zebrane dane są wykorzystywane jedynie wewnątrz firmy [nazwa] w celu optymalizacji działań.
            </PivacyText>
            <PivacyText>
                Na naszej witrynie wykorzystujemy następujące pliki cookies [naturalnie trzeba tu dostosować treść do wykorzystywanych przez Ciebie plików]:
                Cookies identyfikuje użytkownika, co pozwala na dopasowanie treści witryny, z której korzysta, do jego potrzeb. Zapamiętując jego preferencje, umożliwia odpowiednie dopasowanie skierowanych do niego reklam. Stosujemy pliki cookies, aby zagwarantować najwyższy standard wygody naszego serwisu, a zebrane dane są wykorzystywane jedynie wewnątrz firmy [nazwa] w celu optymalizacji działań. <br>
                </br><br></br>
                a) „niezbędne” pliki cookies, umożliwiające korzystanie z usług dostępnych w ramach serwisu, np. uwierzytelniające pliki cookies wykorzystywane do usług wymagających uwierzytelniania w ramach serwisu;
                <br></br><br></br>
                b) pliki cookies służące do zapewnienia bezpieczeństwa, np. wykorzystywane do wykrywania nadużyć w zakresie uwierzytelniania w ramach serwisu;
                <br></br><br></br>
                c) „wydajnościowe” pliki cookies, umożliwiające zbieranie informacji o sposobie korzystania ze stron internetowych serwisu;
                <br></br><br></br>
                d) „funkcjonalne” pliki cookies, umożliwiające „zapamiętanie” wybranych przez użytkownika ustawień i personalizację interfejsu użytkownika, np. w zakresie wybranego języka lub regionu, z którego pochodzi użytkownik, rozmiaru czcionki, wyglądu strony internetowej itp.;
                <br></br><br></br>
                e) „reklamowe” pliki cookies, umożliwiające dostarczanie użytkownikom treści reklamowych bardziej dostosowanych do ich zainteresowań.
                <br></br><br></br>
            </PivacyText>
            <PivacyText>
                Użytkownik w każdej chwili ma możliwość wyłączenia lub przywrócenia opcji gromadzenia cookies poprzez zmianę ustawień w przeglądarce internetowej. Instrukcja zarządzania plikami cookies jest dostępna na stronie
                <br></br><br></br>
                <a href="http://www.allaboutcookies.org/manage-cookies" target="_blank">http://www.allaboutcookies.org/manage-cookies</a>
                <br></br><br></br>
                Dodatkowe dane osobowe, jak adres e-mail, zbierane są jedynie w miejscach, w których użytkownik wypełniając formularz wyraźnie wyraził na to zgodę. Powyższe dane zachowujemy i wykorzystujemy tylko do potrzeb niezbędnych do wykonania danej funkcji.
            </PivacyText>
        </BlockWrapper>
      <Footer/>
    </> 
  </ThemeProvider>
)

export default PrivacyPolicy
