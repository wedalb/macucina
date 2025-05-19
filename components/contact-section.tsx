import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
    return (
        <section className="py-24 bg-[#f0fdf4]">
            <div className="container px-4 md:px-6 mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-900">Kontakt</h2>
                    <div className="w-24 h-1 bg-green-200 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Für Anmeldungen und Fragen stehen wir Ihnen gerne zur Verfügung. Kontaktieren Sie uns telefonisch oder per E-Mail.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        {/* Left Column – Contact Info */}
                        <div className="p-8">
                            <h3 className="text-xl font-serif mb-6 text-gray-900">Kontaktinformationen</h3>
                            <div className="space-y-4">
                                <div className="flex items-center text-gray-700">
                                    <Phone className="h-5 w-5 text-green-600 mr-3" />
                                    <span>038755 – 449 322</span>
                                </div>
                                <div className="flex items-center text-gray-700">
                                    <Mail className="h-5 w-5 text-green-600 mr-3" />
                                    <a href="mailto:olgaseiwert77@gmail.com" className="hover:text-green-600">
                                        olgaseiwert77@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center text-gray-700">
                                    <MapPin className="h-5 w-5 text-green-600 mr-3" />
                                    <span>Boek, Mecklenburg-Vorpommern</span>
                                </div>
                            </div>

                            <h3 className="text-xl font-serif mt-8 mb-4 text-gray-900">Öffnungszeiten</h3>
                            <p className="text-gray-700">
                                Kochkurse und Veranstaltungen finden nach dem angegebenen Zeitplan statt. Individuelle Termine können nach Absprache vereinbart werden.
                            </p>
                        </div>

                        {/* Right Column – Contact Form */}
                        <div className="p-8 bg-green-50">
                            <h3 className="text-xl font-serif mb-6 text-gray-900">Anfrage senden</h3>
                            <form
                                action="https://formspree.io/f/xrbqdpvq"
                                method="POST"
                                className="space-y-4"
                            >
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                    className="w-full px-4 py-2 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="E-Mail"
                                    required
                                    className="w-full px-4 py-2 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <textarea
                                    name="message"
                                    placeholder="Ihre Nachricht"
                                    rows={4}
                                    required
                                    className="w-full px-4 py-2 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                ></textarea>

                                {/* Optional redirect */}
                                {/* <input type="hidden" name="_redirect" value="/danke" /> */}

                                <button
                                    type="submit"
                                    className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
                                >
                                    Anfrage senden
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
