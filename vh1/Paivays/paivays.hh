#ifndef PAIVAYS_HH
#define PAIVAYS_HH

class HuonoPaivays
{
    // Bad Date Exception
    // Tyhjä toteutus poikkeusluokalle, jotta kääntyisi
    // empty implementation for the exception class, for compiling
};

/*!
  * \brief Yksinkertainen päiväysluokka
  *
  * Päiväysluokka Gregoriaanisen kalenterin päiväyksille Suomessa. Vuosiluvut ennen vuotta 1754 ovat
  * laittomia. Päivien ja kuukausien numerointi lähtee 1:stä.
  *
  * Simple date class for Gregorian calendar in Finland. Years before 1754 are not allowed. Date and
  * month numbering starts from 1.
  **/

// Date
class Paivays
{
public:
    /*!
     * \brief Viikonpaiva on luettelotyyppi viikonpäiville
     *
     * Viikonpaiva is enum for date names. Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.
     */
    enum Viikonpaiva { MAANANTAI, TIISTAI, KESKIVIIKKO, TORSTAI, PERJANTAI, LAUANTAI, SUNNUNTAI };

    /*!
   * \brief Rakentaja alustaa päiväyksen annettuun päivämäärään. Constructor for setting specific date
   * \param p Päivä, Day
   * \param k Kuukausi, Month
   * \param v Vuosi, Year
   * \exception HuonoPaivays   Laiton vuosi, kuukausi tai päivä, tai päivä on liian suuri kuukauteen. Illegal year, month
   * or day, or day is not within month.
   **/
    Paivays(unsigned int p, unsigned int k, unsigned int v);

    /*!
   * \brief Purkaja purkaa päiväyksen. Destructor for date
   * \pre -
   **/
    ~Paivays();

    /*!
   * \brief asetaPaiva asettaa päivän. Sets day
   * \param paiva Uusi päivä. New day.
   * \pre -
   * \post Päiväyksen päivä on asetettu annetuksi (kuukausi ja vuosi ennallaan). Day for the Paivays (date) has been set.
   *    Month and year unchanged.
   * \exception HuonoPaivays   Päivä on laiton tai liian suuri kuukauteen. Day is illegal or not within the month.
   */
    void asetaPaiva(unsigned int paiva);

    /*!
   * \brief asetaKk asettaa kuukauden. Sets month
   * \param kuukausi Uusi kuukausi. New month.
   * \pre -
   * \post Päiväyksen kuukausi on asetettu annetuksi (päivä ja vuosi ennallaan). Month of the Paivays (date) has been set.
   *    Day and year unchanged.
   * \exception HuonoPaivays   Kuukausi on laiton tai päivä on liian suuri kuukauteen. Month is illegal or day is
   * not within the month.
   */
    void asetaKk(unsigned int kuukausi);

    /*!
   * \brief asetaVuosi asettaa vuoden. Sets year
   * \param vuosi Uusi vuosi. New year.
   * \pre -
   * \post Päiväyksen vuosi on asetettu annetuksi (päivä ja kuukausi ennallaan). Year of the Paivays (date) has been set.
   *    Day and month unchanged.
   * \exception HuonoPaivays   Vuosi on laiton tai päivä on liian suuri kuukauteen. Year is illegal or day is not within the month.
   */
    void asetaVuosi(unsigned int vuosi);

    /*!
   * \brief annaPaiva palauttaa päivän. Returns day.
   * \return Päivämäärän päivä. Day of the date
   * \pre -
   */
    unsigned int annaPaiva() const;

    /*!
   * \brief annaKk palauttaa kuukauden. Returns month.
   * \return Päivämäärän kuukausi. Month of the date
   * \pre -
   */
    unsigned int annaKk() const;

    /*!
   * \brief annaVuosi palauttaa vuoden. Returns year.
   * \return Päivämäärän vuosi. Year of the date.
   * \pre -
   */
    unsigned int annaVuosi() const;

    /*!
   * \brief annaViikonpaiva palauttaa päiväyksen viikonpäivän. Give day of the week for the date.
   * \return Päivämäärän viikonpäivä. Date's day of the week.
   * \pre -
   */
    Viikonpaiva annaViikonpaiva() const;

    /*!
   * \brief etene siirtää päiväystä eteenpäin. etene (advance) moves date forward.
   * \param n montako päivää siirrytään. How many days will be moved
   * \pre -
   * \post Päiväystä on siirretty n päivää eteenpäin. Date has moved n days forward.
   */
    void etene(unsigned int n);

    /*!
   * \brief paljonkoEdella kertoo, montako päivää annettu päiväys on tätä päiväystä edellä. How much forward. Tells how many
   * days the given date is forward compared to the date it is called for.
   * \param p Päiväys, jota vertaillaan. Date to compare
   * \return Päiväysten ero päivinä (positiivinen = p myöhemmin, negatiivinen = p aiemmin). Difference in days. Positive value:
   *    p is later. Negative value: p is earlier.
   * \pre -
   */
    int paljonkoEdella(Paivays const& p) const;

    /*!
   * \brief onkoKarkausvuosi kertoo, onko annettu vuosi karkausvuosi. Is leap year tells is the given year leap year
   * \param vuosi on se vuosi, josta kysytään. Year to be checked
   * \return onko karkausvuosi. Is the year leap year
   * \exception HuonoPaivays   Vuosi on laiton. Illegal year
   */
    static bool onkoKarkausvuosi(unsigned int vuosi);

    /*!
   * \brief kuukaudenPituus kertoo annetun vuoden annetun kuukauden pituuden. Length of the month tells the month's
   * length in the given year
   * \param kuukausi on se kuukausi, josta kysytään. Month to be checked
   * \param vuosi on se vuosi, josta kysytään. Year to be checked.
   * \return kuukauden pituus. Length of the month.
   * \exception HuonoPaivays   Vuosi tai kuukausi on laiton. Illegal year or month.
   */
    static unsigned int kuukaudenPituus(unsigned int kuukausi, unsigned int vuosi);

    /*!
   * \brief vuodenPituus kertoo annetun vuoden pituuden. Length of the year tells the year's length.
   * \param vuosi on se vuosi, josta kysytään. Year to be checked
   * \return vuoden pituus. Length of the year
   * \exception HuonoPaivays   Vuosi on laiton. Illegal year.
   */
    static unsigned int vuodenPituus(unsigned int vuosi);

private:
    unsigned int paiva_;    //!< Päivämäärän päivä Date's day
    unsigned int kuukausi_; //!< Päivämäärän kuukausi Date's month
    unsigned int vuosi_;    //!< Päivämäärän vuosi Date's year

    static unsigned int const KUUKAUDET[12]; //!< Kuukausien pituustaulukko. Array for month lengths.
};

#endif
