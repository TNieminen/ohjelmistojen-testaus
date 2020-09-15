#include <QString>
#include <QtTest>

#include "paivays.hh"

// Tarvitaan, jotta Qt:n testien makrot toimivat oman Viikonpäivä-enumin kanssa (ei kovin yleinen
// eikä oleellinen asia)
// Not relevant to the topic. Required for QT test macros to work with Viikonpaiva (day of the week) -enum
Q_DECLARE_METATYPE(Paivays::Viikonpaiva);

class DateTest : public QObject
{
    Q_OBJECT

public:
    DateTest();

private Q_SLOTS:
    void creatingDate();

    void settingLegalDay();
    void settingIllegalDay();

    void viikonpaiva();
    void viikonpaiva_data();
};

DateTest::DateTest()
{
}

void DateTest::creatingDate()
{
    // Yksinkertainen testi, jossa testataan yhden päiväyksen luomista
    // Simple test for creating one date with costructor
    Paivays p(1, 2, 2014);
    QCOMPARE(p.annaPaiva(), 1u); // 1u is needed as annnaPaiva returns unsigned int. 1u tarvitaan, koska annaPaiva:n paluuarvo on unsigned int
    QCOMPARE(p.annaKk(), 2u);
    QCOMPARE(p.annaVuosi(), 2014u);
}

void DateTest::settingLegalDay()
{
    // Testataan silmukassa kaikki helmikuun päivät, varmistetaan että ok
    // Loop used to check all february days

    for (unsigned int paiva = 1; paiva <= 28; ++paiva)
    {
        Paivays p(1, 2, 2014);

        p.asetaPaiva(paiva);
        QCOMPARE(p.annaPaiva(), paiva);

        // Koska Qt:n testikehyksessä koko testijoukon ajo keskeytyy odottamattomaan poikkeukseen,
        // voi manuaalinen poikkeuskäsittely testitapauksessa olla tarpeen.
        // As QT test framework stops the whole test set if there is unexpected exception,
        // manual exception handling can be necessary. See example below.
        /*
        try
        {
            p.asetaPaiva(paiva);
            QCOMPARE(p.annaPaiva(), paiva);
        }
        catch (...)
        {
            QFAIL("Exception in legal operation");
        }
        */
    }
}

void DateTest::settingIllegalDay()
{
    // Checking in loop illegal "february dates" 29-31, checking that not ok
    // Testataan silmukassa "helmikuun päivät" 29-31, varmistetaan että ei ok
    for (unsigned int paiva = 29; paiva <= 31; ++paiva)
    {
        Paivays p(1, 2, 2015);
        QVERIFY_EXCEPTION_THROWN(p.asetaPaiva(paiva), HuonoPaivays);

        // Qt:n aiemmissa versioissa ja muissa testikehyksissä odotetut poikkeukset voi joutua
        // käsittelemään manuaalisesti.
        // In some earlier version of Qt (or other test frameworks) expected exceptions might need manual handling
        /*
        try
        {
            p.asetaPaiva(paiva);
            QFAIL("Illegal date was accepted");
        }
        catch (HuonoPaivays e)
        {
            // This exception is excepted, so we do nothing
            // Tämä poikkeus pitäisikin tulla, joten ei tehdä mitään.
        }
        */
    }
}

void DateTest::viikonpaiva()
{
    // This method tests one row from viikonpaiva_data -method. It will be automatically called for each row in the matrix.
    // Note the naming of this method (viikonpaiva) and the data method (viikonpaiva_data). It is necessary that they match.
    // Tämä metodi testaa yhden viikonpaiva_data-metodin tuottaman testimatriisin rivin. Sitä
    // kutsutaan automaattisesti jokaiselle matriisin riville.
    // Huomioi tämän ja datametodin nimeäminen. Niiden tulee vastata toisiaan.

    // Fetch data from matrix. Create variables automatically.
    // Haetaan data matriisista, luodaan automaattisesti muuttujat
    QFETCH(unsigned int, paiva);
    QFETCH(unsigned int, kuukausi);
    QFETCH(unsigned int, vuosi);
    QFETCH(Paivays::Viikonpaiva, viikonpaiva);

    // Run tests
    // Suoritetaan testi
    Paivays p(paiva, kuukausi, vuosi);
    QVERIFY2(p.annaViikonpaiva() == viikonpaiva, "Väärä viikonpäivä");
}

void DateTest::viikonpaiva_data()
{
    // This method defines the test matrix for the viikonpaiva and produces wanted test cases.
    // Tämä metodi määrittelee viikonpäivätestin testimatriisin ja tuottaa sinne halutut
    // testitapaukset.

    // Define columns for the matix (types and names)
    // Määritellään testimatriisin sarakkeet (tyypit ja nimet)
    QTest::addColumn<unsigned int>("paiva");
    QTest::addColumn<unsigned int>("kuukausi");
    QTest::addColumn<unsigned int>("vuosi");
    QTest::addColumn<Paivays::Viikonpaiva>("viikonpaiva");

    // Produce the test cases for the matrix. 3u etc needed as the type is unsigned.
    // Tuotetaan testimatriisiin testitapaukset, 3u jne. tarvitaan taas, koska tyyppi on unsigned
    QTest::newRow("while ago")      << 6u  << 9u  << 2016u << Paivays::TIISTAI;
    QTest::newRow("some christmas") << 24u << 12u << 2015u << Paivays::TORSTAI;
}

QTEST_APPLESS_MAIN(DateTest)

#include "tst_paivays.moc"
