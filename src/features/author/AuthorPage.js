import React from "react";
import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Artur Feliks"
            body={
                <>
                    <p>
                        Moim głównym zainteresowaniem jest <strong>muzyka</strong> 🎶. Kocham rozkoszować się dźwiękami,
                        współbrzmieniami, a od 3. klasy podstawówki <strong>śpiewam</strong> nieustannie w różnych chórach, projektach, kwartetach 😁.
                        <strong> Taniec też zawsze był moim konikiem</strong>. Zdarzyło mi się tańczyć w&nbsp;dzieciństwie przez 6 lat w pewnej formacji
                        tanecznej, gdzie można było się zapoznać z&nbsp;różnymi stylami 🕺. Dodatkowo uczyłem się gry na <strong>keyboardzie, pianinie 🎹
                        oraz gitarze 🎸</strong>.
                    </p>
                    <p>
                        Poza muzyką uwielbiam <strong>podróżować</strong>, spotykać się ze znajomymi na planszówki, jeździć na rolkach, a
                        ostatnio trenować na siłowni. <strong>Lubię rozmawiać z ludźmi</strong>, więc spacery, czy spotkania w towarzystwie przyjaciół są
                        dla mnie <em>szczególnie</em> budujące, a tematyka z zakresu psychologii, czy złożoności ludzkiego umysłu dająca wiele do
                        myślenia 😎.
                    </p>
                </>
            }
        />
    </Container>
);