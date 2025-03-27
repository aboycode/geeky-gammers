    document.addEventListener('DOMContentLoaded', function() {

        
        // Language Translation Object
        const translations = {
            en: {
                navHome: 'Home',
                navDashboard: 'Dashboard',
                navContact: 'Contact',
                welcomeText1: 'Namaste, welcome to FarmMitra',
                welcomeText2: 'Empowering Farmers with AI-Driven Insights – Smart Solutions for a Sustainable Future',
                tryNow: 'Try Now',
                featuresHeading: 'WHAT WE OFFER',
                featuresSubheading: 'Being a part of KisanMitra, this is what you get from us:',
                features: [
                    {
                        title: 'Voice-based Assistance',
                        description: 'Get expert farming advice through easy voice commands.'
                    },
                    {
                        title: 'Pest Management',
                        description: 'Detect and prevent crop diseases with AI-powered analysis.'
                    },
                    {
                        title: 'IOT Sensor',
                        description: 'Monitor soil, weather, and crop health in real time.'
                    },
                    {
                        title: 'Market & schemes',
                        description: 'Stay updated on government schemes and find the best market rates.'
                    },
                    {
                        title: 'Community Forum',
                        description: 'Connect with fellow farmers to share knowledge and experiences.'
                    },
                    {
                        title: 'Resource Library',
                        description: 'Explore a vast collection of guides, tutorials, and best practices.'
                    }
                ],
                testimonialsHeading: 'What Farmers Say',
                testimonials: [
                    'KisanMitra has transformed my farming approach with its AI-driven insights.',
                    'The voice assistant helps me get information instantly, even with limited literacy.',
                    'Market rates and government scheme information is a game-changer for me.'
                ],
                loginButtons: ['Login', 'Sign Up'],
                signupForm: {
                    fullName: 'Full Name',
                    phoneNumber: 'Phone Number',
                    password: 'Password',
                    confirmPassword: 'Confirm Password'
                },
                howItWorksHeading: 'How KisanMitra Works',
                howItWorksSteps: [
                    {
                        title: 'Register',
                        description: 'Create your free account and customize your farm profile'
                    },
                    {
                        title: 'Connect',
                        description: 'Link your farm details and preferred languages'
                    },
                    {
                        title: 'Explore',
                        description: 'Access AI-powered insights, voice assistance, and community resources'
                    },
                    {
                        title: 'Grow',
                        description: 'Implement recommendations and track your farm\'s progress'
                    }
                ],
                ctaHeading: 'Ready to Transform Your Farming Journey?',
                ctaSubheading: 'Join thousands of farmers leveraging AI to boost productivity and sustainability',
                ctaButtons: ['Start Free Trial', 'Learn More'],
                footerQuickLinks: ['Home', 'Dashboard', 'Community Forum', 'Resource Library'],
                footerServices: ['Voice Assistance', 'Pest Management', 'Market Rates', 'IoT Sensors'],
                footerSupport: ['Contact Us', 'FAQ', 'Privacy Policy', 'Terms of Service'],
                footerConnectWithUs: 'Connect With Us',
                footerCopyright: '© 2025 KisanMitra. All Rights Reserved.'
            },
            hi: {
                navHome: 'होम',
                navDashboard: 'डैशबोर्ड',
                navContact: 'संपर्क',
                welcomeText1: 'नमस्ते, किसान मित्र में आपका स्वागत है',
                welcomeText2: 'कृषि में AI-संचालित अंतर्दृष्टि के साथ किसानों को सशक्त बनाएं – एक टिकाऊ भविष्य के लिए स्मार्ट समाधान',
                tryNow: 'अभी प्रयास करें',
                featuresHeading: 'हम क्या प्रदान करते हैं',
                featuresSubheading: 'किसान मित्र का हिस्सा बनकर, आपको यह मिलता है:',
                features: [
                    {
                        title: 'वॉइस-आधारित सहायता',
                        description: 'आसान वॉइस कमांड के माध्यम से विशेषज्ञ कृषि सलाह प्राप्त करें।'
                    },
                    {
                        title: 'कीट प्रबंधन',
                        description: 'AI-संचालित विश्लेषण के साथ फसल के रोगों का पता लगाएं और रोकें।'
                    },
                    {
                        title: 'IoT सेंसर',
                        description: 'मिट्टी, मौसम और फसल के स्वास्थ्य की वास्तविक समय में निगरानी करें।'
                    },
                    {
                        title: 'बाजार और योजनाएं',
                        description: 'सरकारी योजनाओं और सर्वोत्तम बाजार दरों से अपडेट रहें।'
                    },
                    {
                        title: 'समुदाय मंच',
                        description: 'ज्ञान और अनुभव साझा करने के लिए अन्य किसानों से जुड़ें।'
                    },
                    {
                        title: 'संसाधन पुस्तकालय',
                        description: 'गाइड, ट्यूटोरियल और सर्वोत्तम प्रथाओं का विशाल संग्रह खोजें।'
                    }
                ],
                testimonialsHeading: 'किसानों की कहानियां',
                testimonials: [
                    'किसान मित्र ने अपनी AI-संचालित अंतर्दृष्टि के साथ मेरी खेती के दृष्टिकोण को बदल दिया है।',
                    'वॉइस सहायक मुझे तुरंत जानकारी प्राप्त करने में मदद करता है, भले ही मेरी साक्षरता सीमित हो।',
                    'बाजार दरें और सरकारी योजना की जानकारी मेरे लिए एक बड़ा बदलाव है।'
                ],
                loginButtons: ['लॉगिन', 'साइन अप'],
                signupForm: {
                    fullName: 'पूरा नाम',
                    phoneNumber: 'फोन नंबर',
                    password: 'पासवर्ड',
                    confirmPassword: 'पासवर्ड की पुष्टि करें'
                },
                howItWorksHeading: 'किसान मित्र कैसे काम करता है',
                howItWorksSteps: [
                    {
                        title: 'पंजीकरण',
                        description: 'अपना नि:शुल्क खाता बनाएं और अपनी खेत की प्रोफ़ाइल को अनुकूलित करें'
                    },
                    {
                        title: 'कनेक्ट करें',
                        description: 'अपने खेत के विवरण और पसंदीदा भाषाओं को जोड़ें'
                    },
                    {
                        title: 'खोजें',
                        description: 'AI-संचालित अंतर्दृष्टि, वॉइस सहायता और समुदाय के संसाधनों तक पहुंच प्राप्त करें'
                    },
                    {
                        title: 'बढ़ें',
                        description: 'सिफारिशों को लागू करें और अपनी खेत की प्रगति का पता लगाएं'
                    }
                ],
                ctaHeading: 'अपनी कृषि यात्रा को बदलने के लिए तैयार हैं?',
                ctaSubheading: 'उन हजारों किसानों में शामिल हों जो उत्पादकता और स्थिरता बढ़ाने के लिए AI का लाभ उठा रहे हैं',
                ctaButtons: ['मुफ्त ट्रायल शुरू करें', 'अधिक जानें'],
                footerQuickLinks: ['होम', 'डैशबोर्ड', 'समुदाय मंच', 'संसाधन पुस्तकालय'],
                footerServices: ['वॉइस सहायता', 'कीट प्रबंधन', 'बाजार दरें', 'IoT सेंसर'],
                footerSupport: ['हमसे संपर्क करें', 'अक्सर पूछे जाने वाले प्रश्न', 'गोपनीयता नीति', 'सेवा की शर्तें'],
                footerConnectWithUs: 'हमसे जुड़ें',
                footerCopyright: '© 2025 किसान मित्र. सभी अधिकार सुरक्षित.'
            }
        };

        // Language Translation Function
        function translatePage(language) {
            const lang = translations[language];
            
            // Navigation Items
            document.querySelector('.nav-items.home').textContent = lang.navHome;
            const navItems = document.querySelectorAll('.nav-items');
            navItems[1].textContent = lang.navDashboard;
            navItems[2].textContent = lang.navContact;

            // Login/Signup Buttons
            const buttons = document.querySelectorAll('.button-group button');
            buttons[0].textContent = lang.loginButtons[0];
            buttons[1].textContent = lang.loginButtons[1];

            // Welcome Texts
            document.querySelector('.text1').textContent = lang.welcomeText1;
            document.querySelector('.text2').textContent = lang.welcomeText2;
            document.querySelector('.namaste button').textContent = lang.tryNow;

            // Features Section
            document.querySelector('.features-section h2').textContent = lang.featuresHeading;
            document.querySelector('.features-section .heading-desc').textContent = lang.featuresSubheading;

            // Feature Cards
            const featureTitles = document.querySelectorAll('.main');
            const featureDescs = document.querySelectorAll('.main-desc');
            
            lang.features.forEach((feature, index) => {
                featureTitles[index].textContent = feature.title;
                featureDescs[index].textContent = feature.description;
            });

            // Testimonials
            document.querySelector('.testimonials h2').textContent = lang.testimonialsHeading;
            const testimonialTexts = document.querySelectorAll('.testimonial p');
            
            lang.testimonials.forEach((text, index) => {
                testimonialTexts[index].textContent = text;
            });

            // How It Works Section
            document.querySelector('.how-it-works h2').textContent = lang.howItWorksHeading;
            const stepTitles = document.querySelectorAll('.step h3');
            const stepDescriptions = document.querySelectorAll('.step p');
            
            lang.howItWorksSteps.forEach((step, index) => {
                stepTitles[index].textContent = step.title;
                stepDescriptions[index].textContent = step.description;
            });

            // Call to Action Section
            document.querySelector('.cta-section h2').textContent = lang.ctaHeading;
            document.querySelector('.cta-section p').textContent = lang.ctaSubheading;
            const ctaButtons = document.querySelectorAll('.cta-buttons button');
            ctaButtons[0].textContent = lang.ctaButtons[0];
            ctaButtons[1].textContent = lang.ctaButtons[1];

            // Footer
            const quickLinks = document.querySelectorAll('.footer-column')[0].querySelectorAll('li');
            const serviceLinks = document.querySelectorAll('.footer-column')[1].querySelectorAll('li');
            const supportLinks = document.querySelectorAll('.footer-column')[2].querySelectorAll('li');

            lang.footerQuickLinks.forEach((link, index) => {
                quickLinks[index].textContent = link;
            });

            lang.footerServices.forEach((link, index) => {
                serviceLinks[index].textContent = link;
            });

            lang.footerSupport.forEach((link, index) => {
                supportLinks[index].textContent = link;
            });

            document.querySelector('.footer-social h4').textContent = lang.footerConnectWithUs;
            document.querySelector('.footer-bottom p').textContent = lang.footerCopyright;
        }

        // Language Selector Functionality
        const languageSelector = document.querySelector('.language-selector');
        const searchContainer = languageSelector.querySelector('.search-container');
        const searchIconSpan = languageSelector.querySelector('.search-icon');
        const languageDropdown = languageSelector.querySelector('.language-dropdown');
        const languageOptions = languageDropdown.querySelectorAll('li');

        // Toggle dropdown visibility
        function toggleDropdown() {
            languageDropdown.classList.toggle('show');
        }

        searchContainer.addEventListener('click', toggleDropdown);
        searchIconSpan.addEventListener('click', toggleDropdown);

    // Select language
    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedLanguage = option.textContent;
            const languageCode = option.getAttribute('data-lang');
            
            // Update search container text
            searchContainer.value = selectedLanguage;
            
            // Hide dropdown
            languageDropdown.classList.remove('show');
            
            // Translate page
            translatePage(languageCode);
        });
    });


        // Close dropdown when clicking outside
        document.addEventListener('click', (event) => {
            if (!languageSelector.contains(event.target)) {
                languageDropdown.classList.remove('show');
            }
        });

        // Testimonial Slider Functionality
        const testimonialContainer = document.querySelector('.testimonial-container');
        const testimonials = document.querySelectorAll('.testimonial');
        
        // Create wrapper div
        const wrapper = document.createElement('div');
        wrapper.classList.add('testimonial-wrapper');
        
        // Move testimonials into wrapper
        testimonials.forEach(testimonial => {
            wrapper.appendChild(testimonial);
        });
        
        // Replace original content with wrapper
        testimonialContainer.innerHTML = '';
        testimonialContainer.appendChild(wrapper);
        
        // Create navigation dots
        const navContainer = document.createElement('div');
        navContainer.classList.add('testimonial-navigation');
        
        testimonials.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('nav-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => changeTestimonial(index));
            navContainer.appendChild(dot);
        });
        
        testimonialContainer.appendChild(navContainer);

        let currentIndex = 0;
        const totalTestimonials = testimonials.length;

        function changeTestimonial(index) {
            currentIndex = index;
            updateTestimonialView();
        }

        function updateTestimonialView() {
            const wrapper = document.querySelector('.testimonial-wrapper');
            const dots = document.querySelectorAll('.nav-dot');
            
            // Update transform
            wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            // Update active dot
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        // Manual navigation
        function nextTestimonial() {
            currentIndex = (currentIndex + 1) % totalTestimonials;
            updateTestimonialView();
        }

        function prevTestimonial() {
            currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
            updateTestimonialView();
        }

        // Auto-slide functionality
        let autoSlideInterval;
        function startAutoSlide() {
            autoSlideInterval = setInterval(nextTestimonial, 5000);
        }

        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        // Start auto-sliding
        startAutoSlide();

        // Pause auto-slide on hover
        testimonialContainer.addEventListener('mouseenter', stopAutoSlide);
        testimonialContainer.addEventListener('mouseleave', startAutoSlide);

        // Optional: Add swipe/touch support for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        testimonialContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        testimonialContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            if (touchStartX - touchEndX > 50) {
                // Swipe left
                nextTestimonial();
            } else if (touchEndX - touchStartX > 50) {
                // Swipe right
                prevTestimonial();
            }
        }


            // Previous code remains the same...
        
            // Login/Signup Modal Functionality
            const loginBtn = document.getElementById('login-btn');
            const signupBtn = document.getElementById('signup-btn');
            const loginSignupModal = document.getElementById('login-signup-modal');
            const formContainer = document.querySelector('.form_container');
            const formClose = document.querySelector('.form_close');
            const signupLink = document.getElementById('signup-link');
            const loginLink = document.getElementById('login-link');
        
            // Open login form from navigation buttons
            loginBtn.addEventListener('click', () => {
                loginSignupModal.classList.add('show');
                formContainer.classList.remove('active'); // Show login form
            });
        
            // Open signup form from navigation buttons
            signupBtn.addEventListener('click', () => {
                loginSignupModal.classList.add('show');
                formContainer.classList.add('active'); // Show signup form
            });
        
            // Close form
            formClose.addEventListener('click', () => {
                loginSignupModal.classList.remove('show');
            });
        
            // Switch to Signup form
            signupLink.addEventListener('click', (e) => {
                e.preventDefault();
                formContainer.classList.add('active');
            });
        
            // Switch to Login form
            loginLink.addEventListener('click', (e) => {
                e.preventDefault();
                formContainer.classList.remove('active');
            });
        
            // Password show/hide functionality
            const pwShowHide = document.querySelectorAll('.pw_hide');
            pwShowHide.forEach(toggleBtn => {
                toggleBtn.addEventListener('click', () => {
                    let pwFields = toggleBtn.closest('.input_box').querySelector('input[type="password"]');
                    
                    if (pwFields.type === 'password') {
                        pwFields.type = 'text';
                        toggleBtn.classList.replace('uil-eye-slash', 'uil-eye');
                    } else {
                        pwFields.type = 'password';
                        toggleBtn.classList.replace('uil-eye', 'uil-eye-slash');
                    }
                });
            });
        
            // Optional: Form submission handling (you can customize this)
            const loginForm = document.getElementById('login-form');
            const signupForm = document.getElementById('signup-form');
        
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                // Add login logic here
                alert('Login form submitted');
            });
        
            signupForm.addEventListener('submit', (e) => {
                e.preventDefault();
                // Add signup logic here
                alert('Signup form submitted');
            });
        
            // Rest of the previous code remains the same...
        });




        // AI Context Understanding Module
class AIContextAssistant {
    constructor() {
        // Initialize key website sections and their content
        this.sectionContexts = {
            home: {
                description: 'Landing page introducing KisanMitra\'s core mission',
                keywords: ['farmers', 'AI', 'agriculture', 'technology', 'empowerment']
            },
            features: {
                description: 'Detailed breakdown of services offered',
                services: [
                    'Voice-based Assistance',
                    'Pest Management',
                    'IoT Sensor',
                    'Market & Schemes',
                    'Community Forum',
                    'Resource Library'
                ]
            },
            howItWorks: {
                description: 'Step-by-step guide to using KisanMitra',
                steps: [
                    'Register',
                    'Connect',
                    'Explore',
                    'Grow'
                ]
            }
        };

        this.initializeContextUnderstanding();
    }

    initializeContextUnderstanding() {
        // Create AI assistant dialog box
        this.createAIAssistantUI();
        
        // Add event listeners
        this.setupEventListeners();
    }

    createAIAssistantUI() {
        const aiAssistantContainer = document.createElement('div');
        aiAssistantContainer.id = 'ai-assistant-container';
        aiAssistantContainer.innerHTML = `
            <div id="ai-assistant-icon">
                <img src="ai-assistant-icon.png" alt="AI Assistant">
            </div>
            <div id="ai-assistant-dialog" class="hidden">
                <div id="ai-assistant-header">
                    <h3>KisanMitra AI Assistant</h3>
                    <button id="close-ai-assistant">×</button>
                </div>
                <div id="ai-assistant-messages">
                    <div class="ai-welcome-message">
                        Hi! I'm your AI context assistant. Ask me anything about KisanMitra.
                    </div>
                </div>
                <div id="ai-assistant-input-container">
                    <input type="text" id="ai-assistant-input" placeholder="Ask about KisanMitra...">
                    <button id="send-ai-query">Send</button>
                </div>
            </div>
        `;
        document.body.appendChild(aiAssistantContainer);

        // Add styles
        const styles = `
            #ai-assistant-container {
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 1000;
            }
            #ai-assistant-icon img {
                width: 60px;
                height: 60px;
                cursor: pointer;
                border-radius: 50%;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            }
            #ai-assistant-dialog {
                width: 350px;
                background: white;
                border-radius: 10px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                position: absolute;
                bottom: 80px;
                right: 0;
                transition: all 0.3s ease;
                opacity: 0;
                visibility: hidden;
            }
            #ai-assistant-dialog.show {
                opacity: 1;
                visibility: visible;
            }
            #ai-assistant-header {
                background: #4070f4;
                color: white;
                padding: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
            }
            #ai-assistant-messages {
                height: 300px;
                overflow-y: auto;
                padding: 15px;
            }
            #ai-assistant-input-container {
                display: flex;
                padding: 10px;
                border-top: 1px solid #e0e0e0;
            }
            #ai-assistant-input {
                flex-grow: 1;
                padding: 8px;
                border: 1px solid #ddd;
                border-radius: 4px;
            }
            #send-ai-query {
                margin-left: 10px;
                background: #4070f4;
                color: white;
                border: none;
                padding: 8px 15px;
                border-radius: 4px;
            }
        `;
        const styleElement = document.createElement('style');
        styleElement.textContent = styles;
        document.head.appendChild(styleElement);
    }

    setupEventListeners() {
        const aiAssistantIcon = document.getElementById('ai-assistant-icon');
        const aiAssistantDialog = document.getElementById('ai-assistant-dialog');
        const closeButton = document.getElementById('close-ai-assistant');
        const sendQueryButton = document.getElementById('send-ai-query');
        const queryInput = document.getElementById('ai-assistant-input');

        // Toggle dialog visibility
        aiAssistantIcon.addEventListener('click', () => {
            aiAssistantDialog.classList.toggle('show');
        });

        // Close dialog
        closeButton.addEventListener('click', () => {
            aiAssistantDialog.classList.remove('show');
        });

        // Send query
        sendQueryButton.addEventListener('click', () => this.processQuery());
        queryInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.processQuery();
        });
    }

    processQuery() {
        const queryInput = document.getElementById('ai-assistant-input');
        const messagesContainer = document.getElementById('ai-assistant-messages');
        const query = queryInput.value.trim();

        if (!query) return;

        // Add user query to messages
        this.addMessage('user', query);

        // Process the query
        const response = this.generateResponse(query);

        // Add AI response to messages
        this.addMessage('ai', response);

        // Clear input
        queryInput.value = '';
    }

    addMessage(type, message) {
        const messagesContainer = document.getElementById('ai-assistant-messages');
        const messageElement = document.createElement('div');
        messageElement.classList.add('ai-message', `ai-${type}-message`);
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);
        
        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    generateResponse(query) {
        // Lowercase query for easier matching
        query = query.toLowerCase();

        // Context-based response generation
        if (query.includes('feature') || query.includes('service')) {
            return this.generateFeaturesResponse();
        }

        if (query.includes('how') && (query.includes('work') || query.includes('use'))) {
            return this.generateHowItWorksResponse();
        }

        if (query.includes('mission') || query.includes('goal')) {
            return this.generateMissionResponse();
        }

        if (query.includes('help') || query.includes('assist')) {
            return this.generateGeneralAssistanceResponse();
        }

        // Fallback response
        return "I can help you understand KisanMitra's features, how it works, or its mission. Could you be more specific?";
    }

    generateFeaturesResponse() {
        const features = this.sectionContexts.features.services;
        return `KisanMitra offers six key services to support farmers:
1. ${features[0]}: Get expert farming advice through voice commands
2. ${features[1]}: AI-powered crop disease detection
3. ${features[2]}: Real-time monitoring of soil, weather, and crop health
4. ${features[3]}: Updates on government schemes and market rates
5. ${features[4]}: Connect with fellow farmers in our community forum
6. ${features[5]}: Access a comprehensive library of agricultural resources`;
    }

    generateHowItWorksResponse() {
        const steps = this.sectionContexts.howItWorks.steps;
        return `Using KisanMitra is simple and involves four key steps:
1. ${steps[0]}: Create a free account and set up your farm profile
2. ${steps[1]}: Link your farm details and language preferences
3. ${steps[2]}: Access AI insights, voice assistance, and community resources
4. ${steps[3]}: Implement recommendations and track your farm's progress`;
    }

    generateMissionResponse() {
        return "KisanMitra's mission is to empower farmers through cutting-edge AI technology. We aim to provide smart, sustainable solutions that enhance agricultural productivity, offer real-time insights, and create a supportive community for farmers across India.";
    }

    generateGeneralAssistanceResponse() {
        return "I'm here to help you understand KisanMitra! I can provide information about our features, explain how our platform works, or help you navigate our services. What would you like to know?";
    }
}

// Initialize AI Context Assistant when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.aiContextAssistant = new AIContextAssistant();
});
