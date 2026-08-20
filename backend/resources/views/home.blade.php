<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $page->hero_headline }} | Core Unity Solutions</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Plus+Jakarta+Sans:wght@300;400;500;700&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS CDN for instant premium rendering -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Plus Jakarta Sans', 'sans-serif'],
                        display: ['Outfit', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            red: '#E11D48',
                            dark: '#030303',
                            gray: '#0F0F0F',
                        }
                    }
                }
            }
        }
    </script>
    
    <style>
        body {
            background-color: #030303;
            color: #ffffff;
            overflow-x: hidden;
        }
        
        /* Subtle grid background */
        .grid-bg {
            background-image: 
                radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0),
                radial-gradient(circle at 50% 50%, rgba(225, 29, 72, 0.03) 0%, transparent 50%);
            background-size: 40px 40px, 100% 100%;
        }

        /* Earth glow effect */
        .earth-glow {
            box-shadow: 0 -30px 100px -10px rgba(59, 130, 246, 0.25), 0 -10px 40px -15px rgba(225, 29, 72, 0.2);
        }

        /* Pulsing button border */
        @keyframes pulse-border {
            0% { box-shadow: 0 0 0 0 rgba(225, 29, 72, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(225, 29, 72, 0); }
            100% { box-shadow: 0 0 0 0 rgba(225, 29, 72, 0); }
        }
        .btn-pulse {
            animation: pulse-border 2s infinite;
        }
    </style>
</head>
<body class="font-sans antialiased grid-bg min-h-screen flex flex-col justify-between">

    <!-- Header Navigation -->
    <header class="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative z-50">
        <!-- Logo -->
        <a href="#" class="flex items-center space-x-2">
            <span class="font-display font-extrabold text-2xl tracking-wider text-white">core<span class="text-brand-red">unity</span></span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-1.5">
            <a href="#" class="px-5 py-2 text-sm font-medium text-white bg-brand-red rounded-full transition-all duration-300">Home</a>
            <a href="#" class="px-5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-all duration-300">About</a>
            <a href="#" class="px-5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-all duration-300">Services</a>
            <a href="#" class="px-5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-all duration-300">Case Study</a>
            <a href="#" class="px-5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-all duration-300">Blog</a>
            <a href="#" class="px-5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-all duration-300">Contact</a>
        </nav>

        <!-- Right Action Buttons -->
        <div class="flex items-center space-x-4">
            <button onclick="openExpertModal()" class="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-brand-red rounded-full hover:bg-rose-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-rose-900/30 cursor-pointer">
                Speak to an expert
            </button>
            <!-- Icon buttons for communication -->
            <a href="#" aria-label="WhatsApp" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:text-green-500 hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.59 2.019 14.13 1.01 11.999 1.01 6.563 1.01 2.139 5.381 2.135 10.81c-.001 1.737.472 3.427 1.369 4.895l-.993 3.623 3.536-.934zm12.651-7.147c-.318-.16-1.879-.926-2.168-1.031-.289-.105-.499-.158-.709.158-.21.316-.813 1.031-.996 1.242-.183.21-.366.237-.684.078-.318-.16-1.341-.494-2.554-1.577-.944-.843-1.58-1.883-1.765-2.199-.183-.315-.02-.486.139-.643.143-.142.318-.37.477-.553.158-.184.211-.316.316-.527.105-.21.053-.395-.026-.553-.079-.158-.709-1.71-.972-2.34-.256-.614-.517-.53-.709-.54-.183-.01-.394-.012-.604-.012-.21 0-.552.079-.841.395-.289.316-1.103 1.08-1.103 2.632 0 1.553 1.13 3.053 1.288 3.264.158.21 2.224 3.397 5.388 4.761.753.324 1.34.518 1.8.663.757.241 1.446.207 1.99.125.607-.09 1.879-.769 2.143-1.474.263-.705.263-1.312.184-1.442-.079-.13-.289-.21-.606-.369z"/></svg>
            </a>
            <a href="#" aria-label="Phone" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:text-rose-500 hover:border-rose-500/50 hover:bg-rose-500/10 transition-all duration-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </a>
        </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col justify-center items-center text-center px-6 relative z-10 pt-10 pb-4">
        
        <!-- Hero Headline -->
        <h1 class="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold max-w-5xl tracking-tight leading-tight md:leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400">
            {{ $page->hero_headline }}
        </h1>

        <!-- CTA Action Area -->
        @if($page->hero_cta_text && $page->hero_cta_url)
            <div class="mt-8 flex flex-col items-center">
                <button id="openModalBtn" class="inline-flex items-center space-x-3 bg-brand-red/10 border border-brand-red/50 hover:border-brand-red/90 text-white rounded-full pl-5 pr-2.5 py-2.5 transition-all duration-300 hover:scale-[1.03] btn-pulse group shadow-[0_0_20px_rgba(225,29,72,0.15)]">
                    <span class="text-sm font-semibold tracking-wide">{{ $page->hero_cta_text }}</span>
                    <!-- User Avatar matching design -->
                    <div class="w-8 h-8 rounded-full border border-brand-red/40 overflow-hidden bg-brand-gray flex items-center justify-center">
                        <svg class="w-4 h-4 text-brand-red" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </div>
                </button>
                
                <!-- Graphic Connector Dot Line -->
                <div class="h-16 w-[1px] bg-gradient-to-b from-brand-red/40 to-transparent mt-4 border-dashed border-l border-white/10"></div>
            </div>
        @endif

        <!-- Earth Graphic -->
        <div class="w-full max-w-lg md:max-w-xl mx-auto -mt-8 relative select-none">
            <img src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=800" 
                 alt="Earth Globe" 
                 class="w-full h-auto rounded-full object-cover aspect-square earth-glow opacity-85 hover:opacity-100 transition-opacity duration-500 max-h-[300px] md:max-h-[380px] mx-auto scale-95 hover:scale-100 transform duration-700" />
        </div>

        <!-- Global Presence Bar -->
        @if($page->global_presence && is_array($page->global_presence))
            <div class="mt-8 flex items-center space-x-3 bg-white/[0.02] border border-white/5 rounded-full px-6 py-2.5 text-xs sm:text-sm text-gray-400 backdrop-blur-sm">
                <span class="font-semibold text-gray-500 uppercase tracking-wider">Our Global Presence</span>
                <span class="h-4 w-[1px] bg-white/10"></span>
                <div class="flex items-center space-x-4">
                    @foreach($page->global_presence as $location)
                        <!-- Location item with small colored dot -->
                        <span class="inline-flex items-center font-medium text-white hover:text-brand-red transition-colors duration-300">
                            <span class="w-1.5 h-1.5 rounded-full bg-brand-red mr-1.5"></span>
                            {{ is_array($location) ? ($location['country'] ?? '') : $location }}
                        </span>
                    @endforeach
                </div>
            </div>
        @endif

    </main>

    <!-- Footer / Logo Ticker -->
    <footer class="w-full bg-black/40 border-t border-white/5 py-8 backdrop-blur-md mt-12 relative z-10">
        <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <span class="text-xs text-gray-500">&copy; {{ date('Y') }} Core Unity Solutions. All rights reserved.</span>
            
            <!-- Logo Ticker items -->
            <div class="flex flex-wrap items-center justify-center gap-6 md:gap-8 opacity-40 hover:opacity-60 transition-opacity duration-300">
                <span class="font-display font-bold text-sm tracking-widest text-white uppercase">AZBEERA</span>
                <span class="font-display font-extrabold text-sm tracking-widest text-white uppercase italic">ZAWYA</span>
                <span class="font-serif font-bold text-sm tracking-tight text-white uppercase">GULF NEWS</span>
                <span class="font-display font-medium text-sm tracking-widest text-white">Khaleej Times</span>
                <span class="font-sans font-light text-sm tracking-wider text-white">arabianpost</span>
                <span class="font-display font-black text-sm tracking-tight text-white uppercase">ALJAZEERA</span>
            </div>
        </div>
    </footer>

    <!-- Schedule a Call Modal -->
    <div id="callModal" class="fixed inset-0 z-[9999] hidden flex items-center justify-center p-4">
        <!-- Backdrop - darker overlay to make background completely invisible -->
        <div id="modalBackdrop" class="fixed inset-0 bg-black/95 backdrop-blur-xl opacity-0 transition-opacity duration-300"></div>

        <!-- Modal Container -->
        <div id="modalContainer" class="relative bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-[0_20px_60px_rgba(0,0,0,0.3)] z-10 overflow-hidden opacity-0 translate-y-8 transition-all duration-300">
            <!-- Subtle top red glow bar -->
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 to-rose-600"></div>

            <!-- Close Button -->
            <button id="closeModalBtn" aria-label="Close modal" class="absolute top-4 right-4 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 border border-zinc-200 p-2 rounded-full transition-colors cursor-pointer">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>

            <!-- Header -->
            <div class="mb-6">
                <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 border border-red-200/50 rounded-full text-[11px] font-semibold text-red-600 uppercase tracking-wider mb-3">
                    Direct Consultation
                </div>
                <h3 class="text-2xl font-display font-extrabold text-zinc-900 mt-1">Schedule a Call</h3>
                <p class="text-sm text-zinc-500 mt-1">Let's talk about your project and build something amazing together.</p>
            </div>

            <!-- Booking Form -->
            <form id="callForm" class="space-y-4">
                <div>
                    <label for="formName" class="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">Full Name</label>
                    <input type="text" id="formName" name="name" required class="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 text-sm focus:outline-none focus:border-red-600/80 focus:ring-1 focus:ring-red-600/25 transition-all duration-200 placeholder-zinc-400" placeholder="e.g. John Doe">
                </div>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label for="formEmail" class="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">Email Address</label>
                        <input type="email" id="formEmail" name="email" required class="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 text-sm focus:outline-none focus:border-red-600/80 focus:ring-1 focus:ring-red-600/25 transition-all duration-200 placeholder-zinc-400" placeholder="name@company.com">
                    </div>
                    <div>
                        <label for="formPhone" class="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">Phone Number</label>
                        <input type="tel" id="formPhone" name="phone" class="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 text-sm focus:outline-none focus:border-red-600/80 focus:ring-1 focus:ring-red-600/25 transition-all duration-200 placeholder-zinc-400" placeholder="+971 50 000 0000">
                    </div>
                </div>

                <div>
                    <label for="formService" class="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">Interested Service</label>
                    <div class="relative">
                        <select id="formService" name="service" class="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600/80 focus:ring-1 focus:ring-red-600/25 transition-all duration-200 appearance-none cursor-pointer text-zinc-400" onchange="this.className = this.value === '' ? 'w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600/80 focus:ring-1 focus:ring-red-600/25 transition-all duration-200 appearance-none cursor-pointer text-zinc-400' : 'w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600/80 focus:ring-1 focus:ring-red-600/25 transition-all duration-200 appearance-none cursor-pointer text-zinc-900'">
                            <option value="" disabled selected class="text-zinc-400">Please select a service</option>
                            <option value="web-development" class="bg-white text-zinc-900">Web App & Core Development</option>
                            <option value="mobile-app" class="bg-white text-zinc-900">Mobile Applications</option>
                            <option value="ui-ux" class="bg-white text-zinc-900">UI/UX Product Design</option>
                            <option value="digital-marketing" class="bg-white text-zinc-900">Growth & Performance Marketing</option>
                            <option value="other" class="bg-white text-zinc-900">Other Inquiries</option>
                        </select>
                        <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-500">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                        </div>
                    </div>
                </div>

                <div>
                    <label for="formMessage" class="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">Brief Message</label>
                    <textarea id="formMessage" name="message" rows="3" class="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 text-sm focus:outline-none focus:border-red-600/80 focus:ring-1 focus:ring-red-600/25 transition-all duration-200 resize-none placeholder-zinc-400" placeholder="Describe your project, timeline, or objectives..."></textarea>
                </div>

                <button type="submit" class="w-full flex items-center justify-center py-3.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-red-950/20 cursor-pointer">
                    Book Call Now
                </button>
            </form>
        </div>
    </div>

    <!-- Speak to an Expert Modal -->
    <div id="expertModal" class="fixed inset-0 z-[9999] hidden flex items-center justify-center p-4">
        <!-- Backdrop - darker overlay -->
        <div id="expertModalBackdrop" class="fixed inset-0 bg-black/95 backdrop-blur-xl opacity-0 transition-opacity duration-300"></div>

        <!-- Modal Container -->
        <div id="expertModalContainer" class="relative bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-[0_20px_60px_rgba(0,0,0,0.3)] z-10 overflow-hidden opacity-0 translate-y-8 transition-all duration-300">
            <!-- Subtle top red glow bar -->
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 to-rose-600"></div>

            <!-- Close Button -->
            <button id="closeExpertModalBtn" aria-label="Close modal" class="absolute top-4 right-4 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 border border-zinc-200 p-2 rounded-full transition-colors cursor-pointer">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>

            <!-- Header -->
            <div class="mb-6">
                <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-50 border border-rose-200/50 rounded-full text-[11px] font-semibold text-red-600 uppercase tracking-wider mb-3">
                    Direct Consultation
                </div>
                <h3 class="text-2xl font-display font-extrabold text-zinc-900 mt-1">Consult an Expert</h3>
                <p class="text-sm text-zinc-500 mt-1">Get strategic guidance from our digital agency specialists.</p>
            </div>

            <!-- Booking Form -->
            <form id="expertForm" class="space-y-4">
                <div>
                    <label for="expName" class="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">Full Name</label>
                    <input type="text" id="expName" name="name" required class="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 text-sm focus:outline-none focus:border-red-600/80 focus:ring-1 focus:ring-red-600/25 transition-all duration-200 placeholder-zinc-400" placeholder="e.g. John Doe">
                </div>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label for="expEmail" class="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">Email Address</label>
                        <input type="email" id="expEmail" name="email" required class="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 text-sm focus:outline-none focus:border-red-600/80 focus:ring-1 focus:ring-red-600/25 transition-all duration-200 placeholder-zinc-400" placeholder="name@company.com">
                    </div>
                    <div>
                        <label for="expPhone" class="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">Phone Number</label>
                        <!-- Simple dial code visual indicator for backend layout -->
                        <div class="flex">
                            <span class="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-zinc-200 bg-zinc-100 text-zinc-500 text-xs">+971</span>
                            <input type="tel" id="expPhone" name="phone" class="w-full bg-zinc-50 border border-zinc-200 rounded-r-xl px-4 py-3 text-zinc-900 text-sm focus:outline-none focus:border-red-600/80 focus:ring-1 focus:ring-red-600/25 transition-all duration-200 placeholder-zinc-400" placeholder="50 000 0000">
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label for="expTopic" class="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">Consultation Topic</label>
                        <div class="relative">
                            <select id="expTopic" name="specialist" required class="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 text-sm focus:outline-none focus:border-red-600/80 focus:ring-1 focus:ring-red-600/25 transition-all duration-200 appearance-none cursor-pointer">
                                <option value="tech-architecture" class="bg-white text-zinc-900">Technical Architecture</option>
                                <option value="product-strategy" class="bg-white text-zinc-900">Product Strategy</option>
                                <option value="creative-design" class="bg-white text-zinc-900">Creative UI/UX Design</option>
                                <option value="growth-marketing" class="bg-white text-zinc-900">Growth & Marketing</option>
                            </select>
                            <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-500">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label for="expPreference" class="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">Contact Preference</label>
                        <div class="relative">
                            <select id="expPreference" name="contactMethod" required class="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600/80 focus:ring-1 focus:ring-red-600/25 transition-all duration-200 appearance-none cursor-pointer text-zinc-400" onchange="this.className = this.value === '' ? 'w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600/80 focus:ring-1 focus:ring-red-600/25 transition-all duration-200 appearance-none cursor-pointer text-zinc-400' : 'w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600/80 focus:ring-1 focus:ring-red-600/25 transition-all duration-200 appearance-none cursor-pointer text-zinc-900'">
                                <option value="" disabled selected class="text-zinc-400">Select an option</option>
                                <option value="email" class="bg-white text-zinc-900">Email Response</option>
                                <option value="whatsapp" class="bg-white text-zinc-900">WhatsApp Message</option>
                                <option value="call" class="bg-white text-zinc-900">Phone Call</option>
                            </select>
                            <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-500">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <label for="expQuestion" class="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">Core Question / Project Brief</label>
                    <textarea id="expQuestion" name="question" required rows="3" class="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 text-sm focus:outline-none focus:border-red-600/80 focus:ring-1 focus:ring-red-600/25 transition-all duration-200 resize-none placeholder-zinc-400" placeholder="What challenges can our experts help you solve?"></textarea>
                </div>

                <button type="submit" class="w-full flex items-center justify-center py-3.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-red-950/20 cursor-pointer">
                    Request Consultation
                </button>
            </form>
        </div>
    </div>

    <!-- Modal Trigger and Transition Javascript -->
    <script>
        // Modal 1: Call Modal elements
        const openModalBtn = document.getElementById('openModalBtn');
        const closeModalBtn = document.getElementById('closeModalBtn');
        const modal = document.getElementById('callModal');
        const backdrop = document.getElementById('modalBackdrop');
        const container = document.getElementById('modalContainer');
        const form = document.getElementById('callForm');

        // Modal 2: Expert Modal elements
        const closeExpertModalBtn = document.getElementById('closeExpertModalBtn');
        const expertModal = document.getElementById('expertModal');
        const expertBackdrop = document.getElementById('expertModalBackdrop');
        const expertContainer = document.getElementById('expertModalContainer');
        const expertForm = document.getElementById('expertForm');

        function openModal() {
            modal.classList.remove('hidden');
            modal.offsetHeight; // Force reflow
            backdrop.classList.remove('opacity-0');
            backdrop.classList.add('opacity-100');
            container.classList.remove('opacity-0', 'translate-y-8');
            container.classList.add('opacity-100', 'translate-y-0');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            backdrop.classList.remove('opacity-100');
            backdrop.classList.add('opacity-0');
            container.classList.remove('opacity-100', 'translate-y-0');
            container.classList.add('opacity-0', 'translate-y-8');
            setTimeout(() => {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }, 300);
        }

        function openExpertModal() {
            expertModal.classList.remove('hidden');
            expertModal.offsetHeight; // Force reflow
            expertBackdrop.classList.remove('opacity-0');
            expertBackdrop.classList.add('opacity-100');
            expertContainer.classList.remove('opacity-0', 'translate-y-8');
            expertContainer.classList.add('opacity-100', 'translate-y-0');
            document.body.style.overflow = 'hidden';
        }

        function closeExpertModal() {
            expertBackdrop.classList.remove('opacity-100');
            expertBackdrop.classList.add('opacity-0');
            expertContainer.classList.remove('opacity-100', 'translate-y-0');
            expertContainer.classList.add('opacity-0', 'translate-y-8');
            setTimeout(() => {
                expertModal.classList.add('hidden');
                document.body.style.overflow = '';
            }, 300);
        }

        // Modal 1 bindings
        if (openModalBtn) openModalBtn.addEventListener('click', openModal);
        if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
        if (backdrop) backdrop.addEventListener('click', closeModal);

        // Modal 2 bindings
        if (closeExpertModalBtn) closeExpertModalBtn.addEventListener('click', closeExpertModal);
        if (expertBackdrop) expertBackdrop.addEventListener('click', closeExpertModal);

        // Global Escape key
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (!modal.classList.contains('hidden')) closeModal();
                if (!expertModal.classList.contains('hidden')) closeExpertModal();
            }
        });

        // Form 1 Submission Handler
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
                <span class="ml-2">Connecting...</span>
            `;
            setTimeout(() => {
                submitBtn.innerHTML = `
                    <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span class="ml-2">Booked Successfully!</span>
                `;
                submitBtn.classList.remove('bg-red-600', 'hover:bg-red-700');
                submitBtn.classList.add('bg-green-600');
                setTimeout(() => {
                    closeModal();
                    setTimeout(() => {
                        form.reset();
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = originalText;
                        submitBtn.classList.add('bg-red-600', 'hover:bg-red-700');
                        submitBtn.classList.remove('bg-green-600');
                    }, 400);
                }, 1000);
            }, 1500);
        });

        // Form 2 Submission Handler
        expertForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = expertForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
                <span class="ml-2">Connecting...</span>
            `;
            setTimeout(() => {
                submitBtn.innerHTML = `
                    <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span class="ml-2">Request Submitted!</span>
                `;
                submitBtn.classList.remove('bg-red-600', 'hover:bg-red-700');
                submitBtn.classList.add('bg-green-600');
                setTimeout(() => {
                    closeExpertModal();
                    setTimeout(() => {
                        expertForm.reset();
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = originalText;
                        submitBtn.classList.add('bg-red-600', 'hover:bg-red-700');
                        submitBtn.classList.remove('bg-green-600');
                    }, 400);
                }, 1000);
            }, 1500);
        });
    </script>

</body>
</html>
