#include "paivays.hh"
#include <QtDebug>

Paivays::Paivays(unsigned int p, unsigned int k, unsigned int v)
    : paiva_(p), kuukausi_(k), vuosi_(v)
{
    if (v < 1754 || k < 1 || k > 12 || p < 1 || p > kuukaudenPituus(k, v))
    {
        throw HuonoPaivays();
    }
}

Paivays::~Paivays()
{
}

// setDate
void Paivays::asetaPaiva(unsigned int paiva)
{
    if (paiva > kuukaudenPituus(kuukausi_, vuosi_))
    {
        throw HuonoPaivays();
    }

    paiva_ = paiva;
}

// setMonth
void Paivays::asetaKk(unsigned int kuukausi)
{
    if (kuukausi > 12 || paiva_ > kuukaudenPituus(kuukausi, vuosi_))
    {
        throw HuonoPaivays();
    }

    kuukausi_ = kuukausi;
}

//setYear
void Paivays::asetaVuosi(unsigned int vuosi)
{
    if (vuosi <= 1754)
    {
        throw HuonoPaivays();
    }

    vuosi_ = vuosi;
}

//giveDay
unsigned int Paivays::annaPaiva() const
{
    return paiva_;
}

//giveMonth
unsigned int Paivays::annaKk() const
{
    return kuukausi_;
}

//giveYear
unsigned int Paivays::annaVuosi() const
{
    return vuosi_;
}

//giveDayOfTheWeek
Paivays::Viikonpaiva Paivays::annaViikonpaiva() const
{
    Paivays referenssi(1, 1, 1754); // Referenssipäivä, jonka tiedetään olleen tiistai Reference day that is known to be tuesday
    unsigned int paivia = referenssi.paljonkoEdella(*this);
    Viikonpaiva vp = static_cast<Viikonpaiva>( paivia % 7 + 1);
    return vp;
}

//advance
void Paivays::etene(unsigned int n)
{
    // Jonkin verran tehoton toteutus, mutta säästää aivoja. :-)
    // Not very efficient solution but easier for the brain. :-)
    if (n > 0)
    {
        while (n >= vuodenPituus(vuosi_))
        {
            n -= vuodenPituus(vuosi_);
            ++vuosi_;
        }
        while (n >= kuukaudenPituus(kuukausi_, vuosi_))
        {
            n -= kuukaudenPituus(kuukausi_, vuosi_);
            ++kuukausi_;
            if (kuukausi_ > 12)
            {
                kuukausi_ = 1;
                ++vuosi_;
            }
        }
        paiva_ += n;
        if (paiva_ > kuukaudenPituus(kuukausi_, vuosi_))
        {
            paiva_ -= kuukaudenPituus(kuukausi_, vuosi_);
            ++kuukausi_;
            if (kuukausi_ > 12)
            {
                kuukausi_ = 1;
                ++vuosi_;
            }
        }
    }
}

//How much forward
int Paivays::paljonkoEdella(Paivays const &p) const
{
    Paivays tmp(*this); // Kopio tästä päiväyksestä. Copy of this date.
    int erotus = 0;
    // Tämä vaillinainen tyhmä toteutus odottaa, että p on edellä tätä päiväystä
    // Excepts that the p is ahead of this day.
    while (p.vuosi_ > tmp.vuosi_)
    {
        erotus += vuodenPituus(tmp.vuosi_);
        ++tmp.vuosi_;
    }
    while (p.kuukausi_ > tmp.kuukausi_)
    {
        erotus += kuukaudenPituus(tmp.kuukausi_, tmp.vuosi_);
        ++tmp.kuukausi_;
        if (tmp.kuukausi_ > 12)
        {
            tmp.kuukausi_ = 1;
            ++tmp.vuosi_;
        }
    }
    erotus += (p.paiva_ - tmp.paiva_);

    return erotus;
}

// isLeapYear
bool Paivays::onkoKarkausvuosi(unsigned int vuosi)
{
    if (vuosi < 1754) {
        throw HuonoPaivays();
    }

    return (vuosi % 4 == 0) && (!(vuosi % 100 == 0) || (vuosi % 400 == 0));
}

//monthLengths
unsigned int Paivays::kuukaudenPituus(unsigned int kuukausi, unsigned int vuosi)
{
    if (kuukausi < 1 || kuukausi > 12 || vuosi < 1754)
    {
        throw HuonoPaivays();
    }
    else if (kuukausi == 2 && onkoKarkausvuosi(vuosi))
    {
        return 29;
    }
    else
    {
        return KUUKAUDET[kuukausi-1];
    }
}

//lengthOfYear
unsigned int Paivays::vuodenPituus(unsigned int vuosi)
{
    if (onkoKarkausvuosi(vuosi))
    {
        return 366;
    }
    else
    {
        return 365;
    }
}

//MONTHS
unsigned int const Paivays::KUUKAUDET[12] = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
