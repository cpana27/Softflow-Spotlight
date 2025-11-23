"use client"

import { useId, useState } from 'react'
import Link from 'next/link'
import { Heading, Subheading } from '@/components/text'
import { Container } from '@/components/container'
import { FadeIn} from "@/components/FadeIn"
import { Button } from '@/components/button'
import { Offices} from '@/components/Offices'
import { Border } from '@/components/Border'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { GradientBackground } from '@/components/gradient'

function TextInput({ label, ...props }) {
    let id = useId()

    return (
        <div className="group relative z-0 transition-all focus-within:z-10">
            <input
                type="text"
                id={id}
                {...props}
                placeholder=" "
                className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
            />
            <label
                htmlFor={id}
                className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
            >
                {label}
            </label>
        </div>
    )
}

function TextAreaInput({ label, ...props }) {
    let id = useId()

    return (
        <div className="group relative z-0 transition-all focus-within:z-10">
            <textarea
                id={id}
                {...props}
                placeholder=" "
                rows={4}
                className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden resize-none"
            />
            <label
                htmlFor={id}
                className="pointer-events-none absolute top-6 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
            >
                {label}
            </label>
        </div>
    )
}

// Popup Modal Komponente mit nur Blur-Effekt
function Modal({ isOpen, onClose, type, title, message }) {
    if (!isOpen) return null;

    const isSuccess = type === 'success';
    const bgColor = isSuccess ? 'bg-green-50' : 'bg-red-50';
    const borderColor = isSuccess ? 'border-green-200' : 'border-red-200';
    const textColor = isSuccess ? 'text-green-800' : 'text-red-800';
    const buttonColor = isSuccess ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700';
    const icon = isSuccess ? '✅' : '❌';

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                {/* Backdrop nur mit Blur - keine Farbe/Transparenz */}
                <div
                    className="fixed inset-0 backdrop-blur-sm transition-all duration-300"
                    onClick={onClose}
                ></div>

                {/* Modal */}
                <div className="relative transform overflow-hidden rounded-xl bg-white px-4 pb-4 pt-5 text-left shadow-2xl transition-all duration-300 scale-100 sm:my-8 sm:w-full sm:max-w-lg sm:p-6 border border-gray-200">
                    <div>
                        <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${bgColor} ${borderColor} border-2 shadow-lg`}>
                            <span className="text-2xl">{icon}</span>
                        </div>
                        <div className="mt-4 text-center sm:mt-5">
                            <h3 className={`text-lg font-semibold leading-6 ${textColor}`}>
                                {title}
                            </h3>
                            <div className="mt-3">
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {message}
                                </p>
                                {isSuccess && (
                                    <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                                        <p className="text-xs text-blue-700 flex items-center justify-center gap-2">
                                            <span>📧</span>
                                            Sie erhalten in Kürze eine Bestätigungs-E-Mail mit allen Details.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 sm:mt-6">
                        <button
                            type="button"
                            className={`inline-flex w-full justify-center rounded-lg px-4 py-3 text-sm font-semibold text-white shadow-lg ${buttonColor} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-200 hover:shadow-xl transform hover:scale-[1.02]`}
                            onClick={onClose}
                        >
                            Verstanden
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [modal, setModal] = useState({
        isOpen: false,
        type: '',
        title: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const showModal = (type, title, message) => {
        setModal({
            isOpen: true,
            type,
            title,
            message
        });
    };

    const closeModal = () => {
        setModal({
            isOpen: false,
            type: '',
            title: '',
            message: ''
        });
    };

    const validateForm = () => {
        if (!formData.name.trim()) {
            showModal('error', 'Name fehlt', 'Bitte geben Sie Ihren Namen ein.');
            return false;
        }
        if (!formData.email.trim()) {
            showModal('error', 'E-Mail fehlt', 'Bitte geben Sie Ihre E-Mail-Adresse ein.');
            return false;
        }
        if (!formData.message.trim()) {
            showModal('error', 'Nachricht fehlt', 'Bitte geben Sie eine Nachricht ein.');
            return false;
        }
        // Einfache E-Mail-Validierung
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showModal('error', 'Ungültige E-Mail', 'Bitte geben Sie eine gültige E-Mail-Adresse ein.');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Formular validieren
        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        try {
            // FormData für PHP-Script erstellen
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('message', formData.message);

            // Optionale Felder hinzufügen
            if (formData.company) {
                formDataToSend.append('company', formData.company);
            }
            if (formData.phone) {
                formDataToSend.append('phone', formData.phone);
            }

            // Anfrage an dein PHP-Script senden
            const response = await fetch('/send.php', {
                method: 'POST',
                body: formDataToSend,
            });

            // PHP gibt nur Text zurück, nicht JSON
            const result = await response.text();

            if (response.ok && result === 'OK') {
                showModal(
                    'success',
                    'Nachricht erfolgreich gesendet!',
                    'Vielen Dank für Ihre Nachricht. Wir haben Ihre Anfrage erhalten und melden uns bald bei Ihnen zurück.'
                );
                // Formular zurücksetzen
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    phone: '',
                    message: ''
                });
            } else {
                // Fehlerbehandlung basierend auf PHP-Antworten
                let errorMessage = 'Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.';

                if (result === 'Ungültige Eingabe') {
                    errorMessage = 'Bitte füllen Sie alle erforderlichen Felder aus.';
                } else if (result === 'Fehler beim Senden') {
                    errorMessage = 'E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.';
                } else if (result === 'Nur POST erlaubt') {
                    errorMessage = 'Technischer Fehler. Bitte laden Sie die Seite neu.';
                }

                showModal(
                    'error',
                    'Fehler beim Senden',
                    errorMessage
                );
            }
        } catch (error) {
            showModal(
                'error',
                'Verbindungsfehler',
                'Es gab ein Problem mit der Verbindung. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.'
            );
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        
        <Container>
            <GradientBackground>/</GradientBackground>
            <Navbar/>
             <Subheading className= "mt-32 mb-12 text-emerald-600">Kontaktier mich  Ich kann es kaum erwarten von dir zu hören! </Subheading>
            {/* Modal */}
            <Modal
                isOpen={modal.isOpen}
                onClose={closeModal}
                type={modal.type}
                title={modal.title}
                message={modal.message}
            />

                <div className="-m-2 grid grid-cols-1 rounded-[2rem] ring-1 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-black/5">
                    <div className="grid grid-cols-1 rounded-[2rem] p-2 shadow-md shadow-black/5">
                        <div className="rounded-3xl bg-white p-10 pb-9 ring-1 shadow-2xl ring-black/5">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                                <FadeIn className="lg:order-last">
                                    <div>
                                        <div className="flex items-center mb-6">
                                            <span className="text-2xl mr-3">📝</span>
                                            <h2 className="text-lg font-semibold text-emerald-600">
                                                Kontakt
                                            </h2>
                                        </div>

                                        <form onSubmit={handleSubmit}>
                                            <div className="isolate -space-y-px rounded-2xl bg-white/50">
                                                <TextInput
                                                    label="Name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    autoComplete="name"
                                                />
                                                <TextInput
                                                    label="Email"
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    autoComplete="email"
                                                />
                                                <TextInput
                                                    label="Unternehmen/Privat"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleInputChange}
                                                    autoComplete="organization"
                                                />
                                                <TextInput
                                                    label="Telefonnummer"
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    autoComplete="tel"
                                                />
                                                <TextAreaInput
                                                    label="Nachricht"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <Button
                                                type="submit"
                                                disabled={isLoading}
                                                className="w-full sm:w-auto bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-slate-900 font-semibold px-8 py-3 transition-all duration-200 transform hover:scale-[1.02] shadow-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isLoading ? 'Wird gesendet...' : 'Lass uns zusammenarbeiten.'}
                                            </Button>
                                        </form>
                                    </div>
                                </FadeIn>

                                <FadeIn>
                                    <div className="lg:border-r lg:border-neutral-200 lg:pr-8">
                                        <div className="flex items-center mb-6">
                                            <span className="text-2xl mr-3">🏢</span>
                                            <h2 className="text-lg font-semibold text-emerald-600">
                                                Büro
                                            </h2>
                                        </div>

                                        <p className="mt-2 text-sm/6 text-gray-600">
                                            Du bevorzugst es, Dinge persönlich zu erledigen?
                                            <br></br>
                                            Lass uns gerne unverbindlich treffen.
                                        </p>
                                       

                                        <Offices className="mt-8 grid grid-cols-1 gap-6" />

                                        <Border className="mt-16 pt-6">
                                            <div className="flex items-center mb-4">
                                                <span className="text-2xl mr-3">📞</span>
                                                <h2 className="text-lg font-semibold text-emerald-600">
                                                    So erreichst mich uns
                                                </h2>
                                            </div>
                                            <dl className="mt-4 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
                                                {[
                                                    ['Email:', 'christian.pana@softflow.dev'],
                                                    ['Telefonnummer', '0203 73823127'],
                                                ].map(([label, email]) => (
                                                    <div key={email} className="text-sm/6">
                                                        <dt className="font-medium text-gray-800">{label}</dt>
                                                        <dd>
                                                            <Link
                                                                href={`mailto:${email}`}
                                                                className="text-gray-600 hover:text-amber-600"
                                                            >
                                                                {email}
                                                            </Link>
                                                        </dd>
                                                    </div>
                                                ))}
                                            </dl>
                                        </Border>

                                        <Border className="mt-10 pt-6">
                                            <div className="flex items-center mb-4">
                                                <span className="text-2xl mr-3">🌐</span>
                                                <h2 className="text-lg font-semibold text-emerald-600">
                                                    Hier kannst du mich auch finden
                                                </h2>
                                            </div>
                                        </Border>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>

               <Footer />
     </Container>
    )
}