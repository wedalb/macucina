import Image from "next/image"
import { Calendar, Clock, MapPin, Phone, Mail, Users, ChefHat, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactSection from "@/components/contact-section";

export default function MAcucinaPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#f0fdf4]">
            {/* Hero Section */}
            <section className="relative w-full h-[90vh] overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/wald.mp4" type="video/mp4" />
                    Dein Browser unterstützt dieses Videoformat nicht.
                </video>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center max-w-3xl px-4 md:px-0">
                        <div className="inline-block mb-6">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={150}
                                height={150}
                                className="mr-1"
                            />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-white mb-6">MAcucina</h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
                            "Kochen erzeugt und erhält Lebendigkeit! Wenn alle lebendig sind, freut mich das sehr und diese Freude
                            möchte ich mit Ihnen teilen."
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container px-4 md:px-6 mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-900">Willkommen in MAcucina</h2>
                        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Der einfache Weg zum guten, gesunden Leben heißt „Makrobiotik". Makrobiotik muss erlebt werden, probiert
                            werden, gekostet werden, dazu soll MAcucina beitragen!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-serif text-gray-900">Mein Name ist Olga Häring-Seiwert</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Geboren und aufgewachsen in Sankt Petersburg, bin ich 1998 nach Deutschland gekommen. Ich habe zwei
                                Söhne ins Erwachsenenalter begleitet und lebe seit 2017 in dem kleinen Dorf Boek in
                                Mecklenburg-Vorpommern.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                In der benachbarten Stadt Grabow habe ich einen Laden mit Natur- und Reformwaren und den Versandhandel
                                DER GROSSE LADEN eröffnet. 2009 habe ich Klaus Schubring, Makrobiotik Berater und Lehrer, auf einer
                                Fachmesse kennengelernt. Diese Begegnung hat mich dazu gebracht mehr aus meinem Leben zu machen, dabei
                                gesund und froh zu sein.
                            </p>
                            <div className="flex items-center space-x-4 text-green-600">
                                <MapPin className="h-5 w-5" />
                                <span>Boek, Mecklenburg-Vorpommern</span>
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/olga.jpg"
                                alt="Olga Häring-Seiwert"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-24 bg-green-100">
                <div className="container px-4 md:px-6 mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-900">Unsere Philosophie</h2>
                        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-200 mb-6">
                                <ChefHat className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-serif mb-4 text-gray-900">Kochabende</h3>
                            <p className="text-gray-700">
                                Im kleinen Kreis von bis zu 8 Personen kochen wir gemeinsam Makrobiotik-Gerichte und werden diese dann
                                auch anschließend in gemütlicher Atmosphäre genießen.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-200 mb-6">
                                <Users className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-serif mb-4 text-gray-900">Kochkurse</h3>
                            <p className="text-gray-700">
                                Regelmäßig biete ich spezielle Kochkurse an und lade auch Gastköchinnen ein, die zu speziellen Themen
                                ihre Erfahrungen und ihr Wissen beim gemeinsamen Kochen teilen.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-200 mb-6">
                                <Leaf className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-serif mb-4 text-gray-900">Organisation</h3>
                            <p className="text-gray-700">
                                Außerdem können Sie für sich allein oder in einer Gruppe „Organisation in meinem Küchenalltag" zu dem
                                von Ihnen gewünschten Termin buchen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="py-24 bg-white">
                <div className="container px-4 md:px-6 mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-900">Kommende Veranstaltungen</h2>
                        <div className="w-24 h-1 bg-green-200 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            Entdecken Sie unsere bevorstehenden Kochkurse und Veranstaltungen und melden Sie sich noch heute an.
                        </p>
                    </div>

                    <div className="space-y-12">
                        <div className="bg-[#f0fdf4] rounded-lg overflow-hidden shadow-sm">
                            <div className="md:flex">
                                <div className="md:w-1/3 bg-green-100 p-8 flex flex-col justify-center">
                                    <h3 className="text-xl font-serif mb-4 text-gray-900">Kochen für das Immunsystem</h3>
                                    <div className="space-y-3 text-gray-700">
                                        <div className="flex items-center">
                                            <Calendar className="h-5 w-5 mr-3 text-green-600" />
                                            <span>12. Juni 2025</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="h-5 w-5 mr-3 text-green-600" />
                                            <span>4 Stunden</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Users className="h-5 w-5 mr-3 text-green-600" />
                                            <span>Maximal 8 Teilnehmer</span>
                                        </div>
                                    </div>
                                    <div className="mt-6 text-2xl font-serif text-green-600">50€</div>
                                </div>
                                <div className="p-8 md:w-2/3">
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        In diesem Kurs lernen Sie, wie Sie mit makrobiotischen Gerichten Ihr Immunsystem stärken können. Wir
                                        kochen gemeinsam nährende Speisen, die Ihren Körper unterstützen und Ihre Abwehrkräfte stärken.
                                    </p>
                                    <Button className="bg-green-600 hover:bg-green-700 text-white">Anmelden</Button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#f0fdf4] rounded-lg overflow-hidden shadow-sm">
                            <div className="md:flex">
                                <div className="md:w-1/3 bg-green-100 p-8 flex flex-col justify-center">
                                    <h3 className="text-xl font-serif mb-4 text-gray-900">Natürliche Heilmittel aus Küche und Garten</h3>
                                    <div className="space-y-3 text-gray-700">
                                        <div className="flex items-center">
                                            <Calendar className="h-5 w-5 mr-3 text-green-600" />
                                            <span>10. Juli 2025</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="h-5 w-5 mr-3 text-green-600" />
                                            <span>4 Stunden</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Users className="h-5 w-5 mr-3 text-green-600" />
                                            <span>Maximal 8 Teilnehmer</span>
                                        </div>
                                    </div>
                                    <div className="mt-6 text-2xl font-serif text-green-600">50€</div>
                                </div>
                                <div className="p-8 md:w-2/3">
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        Entdecken Sie die heilenden Eigenschaften von Kräutern und Lebensmitteln aus Küche und Garten. In
                                        diesem Kurs lernen Sie, wie Sie natürliche Heilmittel herstellen und in Ihre tägliche Ernährung
                                        integrieren können.
                                    </p>
                                    <Button className="bg-green-600 hover:bg-green-700 text-white">Anmelden</Button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#f0fdf4] rounded-lg overflow-hidden shadow-sm">
                            <div className="md:flex">
                                <div className="md:w-1/3 bg-green-100 p-8 flex flex-col justify-center">
                                    <h3 className="text-xl font-serif mb-4 text-gray-900">Kochabend mit Olga Häring-Seiwert</h3>
                                    <div className="space-y-3 text-gray-700">
                                        <div className="flex items-center">
                                            <Calendar className="h-5 w-5 mr-3 text-green-600" />
                                            <span>6. März & 3. April 2025</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="h-5 w-5 mr-3 text-green-600" />
                                            <span>17:30 - 20:00 Uhr</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Users className="h-5 w-5 mr-3 text-green-600" />
                                            <span>Maximal 8 Teilnehmer</span>
                                        </div>
                                    </div>
                                    <div className="mt-6 text-2xl font-serif text-green-600">40€</div>
                                </div>
                                <div className="p-8 md:w-2/3">
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        Jeden ersten Donnerstag im Monat findet ein gemütlicher Kochabend statt. Wir kochen gemeinsam
                                        makrobiotische Gerichte und genießen diese in entspannter Atmosphäre. Nach dem Abwasch nehme ich mir
                                        noch die Zeit, Ihre Fragen zu beantworten.
                                    </p>
                                    <Button className="bg-green-600 hover:bg-green-700 text-white">Anmelden</Button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#f0fdf4] rounded-lg overflow-hidden shadow-sm">
                            <div className="md:flex">
                                <div className="md:w-1/3 bg-green-100 p-8 flex flex-col justify-center">
                                    <h3 className="text-xl font-serif mb-4 text-gray-900">Grüne Woche von Klaus Schubring</h3>
                                    <div className="space-y-3 text-gray-700">
                                        <div className="flex items-center">
                                            <Calendar className="h-5 w-5 mr-3 text-green-600" />
                                            <span>14. - 21. Mai 2025</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="h-5 w-5 mr-3 text-green-600" />
                                            <span>7 Tage</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Users className="h-5 w-5 mr-3 text-green-600" />
                                            <span>Begrenzte Teilnehmerzahl</span>
                                        </div>
                                    </div>
                                    <div className="mt-6 text-2xl font-serif text-green-600">650€</div>
                                </div>
                                <div className="p-8 md:w-2/3">
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        Eine intensive Woche mit Klaus Schubring, Makrobiotik Berater und Lehrer. Die Anreise erfolgt am 14.
                                        Mai mit Abendessen um 18:00 Uhr, die Abreise am 21. Mai nach dem Frühstück um 9:00 Uhr. Erleben Sie
                                        eine transformative Woche voller makrobiotischer Weisheit und Praxis.
                                    </p>
                                    <Button className="bg-green-600 hover:bg-green-700 text-white">Anmelden</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-24 bg-green-800 text-white">
                <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                    <div className="text-center">
                        <div className="flex justify-center">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={150}
                                height={150}
                                className="mr-1"
                            />
                        </div>

                        <h2 className="text-2xl md:text-3xl font-serif mb-8 leading-relaxed italic">
                            "Der einfache Weg zum guten, gesunden Leben heißt „Makrobiotik". Makrobiotik muss erlebt werden, probiert
                            werden, gekostet werden, dazu soll MAcucina beitragen!"
                        </h2>
                        <p className="text-xl">- Olga Häring-Seiwert</p>
                    </div>
                </div>
            </section>
            <ContactSection/>
        </div>
    )
}
