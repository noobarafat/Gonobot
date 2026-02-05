const sections = [
  {
    title: "সংসদ ও তত্ত্বাবধায়ক সরকার",
    pairs: [
      { now: "সংবিধানে তত্ত্বাবধায়ক সরকার ব্যবস্থা নেই", proposal: "তত্ত্বাবধায়ক সরকার ব্যবস্থার প্রত্যাবর্তন" },
      { now: "বর্তমানে সংসদে পিআর পদ্ধতি নেই", proposal: "উচ্চকক্ষে পিআর পদ্ধতিতে আসন বণ্টন হবে" },
      { now: "ডেপুটি স্পিকার সরকারি দল থেকে", proposal: "ডেপুটি স্পিকার বাধ্যতামূলকভাবে বিরোধী দল থেকে" },
      { now: "এমপিরা দলীয় সিদ্ধান্তের বাইরে ভোট দিলে সদস্য পদ বাতিল", proposal: "বাজেট ও আস্থা বিল ছাড়া অন্য সব বিষয়ে এমপিরা স্বাধীনভাবে ভোট দিতে পারবে" },
      { now: "বিদেশের সঙ্গে চুক্তিতে সংসদের অনুমোদনের প্রয়োজন নেই", proposal: "রাষ্ট্রীয় নিরাপত্তা-সংক্রান্ত চুক্তিতে সংসদের উভয় কক্ষে অনুমোদন লাগবে" }
    ]
  },
  {
    title: "ভাষা, মেয়াদকাল ও সংসদ কাঠামো",
    pairs: [
      { now: "বাংলা ছাড়া অন্য ভাষার স্বীকৃতি নেই", proposal: "রাষ্ট্রভাষা হবে বাংলা। অন্য সব মাতৃভাষাকেও স্বীকৃতি দেওয়া হবে" },
      { now: "সংবিধান সংশোধনে দুই-তৃতীয়াংশ সংখ্যাগরিষ্ঠতা, গণভোট লাগে না", proposal: "সংবিধান সংশোধনে নিম্নকক্ষে দুই-তৃতীয়াংশ এবং উচ্চকক্ষে সংখ্যাগরিষ্ঠতা লাগবে। তত্ত্বাবধায়ক সরকার ব্যবস্থার পরিবর্তনসহ কয়েকটায় গণভোট লাগবে" },
      { now: "প্রধানমন্ত্রীর জরুরি অবস্থা জারির ক্ষমতা", proposal: "জরুরি অবস্থা জারিতে মন্ত্রিসভার অনুমোদন লাগবে, যেখানে বিরোধীদলীয় নেতাও থাকবে" },
      { now: "এক ব্যক্তি যত বছর ইচ্ছা, প্রধানমন্ত্রী পদে থাকা", proposal: "এক ব্যক্তি পুরো জীবনে ১০ বছরের বেশি প্রধানমন্ত্রী পদে থাকতে পারবে না" },
      { now: "বর্তমান সংসদ এক-কক্ষবিশিষ্ট", proposal: "সংসদ হবে দ্বি-কক্ষবিশিষ্ট, যেখানে উচ্চকক্ষে থাকবে ১০০ আসন" }
    ]
  },
  {
    title: "বিচার বিভাগ ও প্রশাসনিক সংস্কার",
    pairs: [
      { now: "আইনজীবী সংগঠন সরাসরি দলীয় রাজনীতিতে যুক্ত", proposal: "আইনজীবী সংগঠন দলীয় রাজনীতির বাইরে থাকা" },
      { now: "এখন বিভাগ আছে ৮টি", proposal: "কুমিল্লা ও ফরিদপুর বিভাগ করা" },
      { now: "কালো টাকা সাদা করার সুযোগ আছে", proposal: "কালো টাকা সাদা করার সুযোগ চিরতরে বন্ধের আইন" },
      { now: "বেসরকারি প্রতিষ্ঠানের দুর্নীতি দুদকের আওতাভুক্ত নয়", proposal: "বেসরকারি প্রতিষ্ঠানের আর্থিক অপরাধ ও দুর্নীতিকে দুদকের আওতায় আনা" },
      { now: "স্বাধীন পুলিশ কমিশন নেই", proposal: "বিচারপতি, সংসদ নেতা ও বিরোধী দলীয় নেতা প্রভৃতির সমন্বয়ে স্বাধীন পুলিশ কমিশন গঠন" }
    ]
  },
  {
    title: "সংবিধান ও রাষ্ট্রপতির ক্ষমতা",
    pairs: [
      { now: "৭ক ও ৭খ অনুচ্ছেদ অনুযায়ী সংবিধান রহিত করলে সর্বোচ্চ শাস্তি", proposal: "সংবিধানের ৭ক ও ৭খ অনুচ্ছেদ বিলোপ" },
      { now: "রাষ্ট্রপতি নিজ ক্ষমতাবলে কেবল প্রধানমন্ত্রী ও বিচারপতি নিয়োগ দিতে পারে", proposal: "রাষ্ট্রপতি নিজ ক্ষমতাবলে প্রধানমন্ত্রীর পরামর্শ ছাড়াই ব্যাংকের গভর্নর ছাড়াও প্রেস কাউন্সিল, তথ্য কমিশন ও আইন কমিশন প্রভৃতির চেয়ারম্যান নিয়োগ দিতে পারবে" },
      { now: "সরকাররের অনুমোদনে যে কাউকে ক্ষমা করতে পারেন রাষ্ট্রপতি", proposal: "ক্ষতিগ্রস্ত পরিবারের সম্মতিতেই অপরাধীকে ক্ষমা করতে পারবেন রাষ্ট্রপতি" },
      { now: "সরকারের অনুরোধে স্থানীয় নির্বাচন আয়োজন করে ইসি", proposal: "স্থানীয় নির্বাচনের দায়িত্ব সাংবিধানিকভাবে ইসিকে দেওয়" },
      { now: "জনপ্রতিনিধিরা শুধু নির্বাচনের সময় সম্পদের হিসাব দেন", proposal: "জনপ্রতিনিধিরা প্রতিবছর সম্পদের হিসাব দিবেন, যা ওয়েবসাইটে থাকবে" }
    ]
  },
  {
    title: "বিচারক নিয়োগ ও বিচার বিভাগ",
    pairs: [
      { now: "রাষ্ট্রপতি যে কাউকে প্রধান বিচারপতি নিয়োগ করতে পারে", proposal: "আপিল বিভাগ থেকে প্রধান বিচারপতি নিয়োগ" },
      { now: "হাইকোর্টের বিচারক নিয়োগ প্রধানমন্ত্রীর নিয়ন্ত্রণে", proposal: "প্রধান বিচারপতির নেতৃত্বাধীন কমিশনের মাধ্যমে হাইকোর্টের বিচারক নিয়োগ" },
      { now: "বিচারপতি নিয়োগ কমিশনের বিধান সংবিধানে নেই", proposal: "বিচারপতি নিয়োগ কমিশনের বিধান সংবিধানে অন্তর্ভুক্ত হবে" },
      { now: "আপিল বিভাগ ও হাইকোর্ট শুধু ঢাকায়", proposal: "প্রত্যেক বিভাগে হাইকোর্টের এক বা একাধিক বেঞ্চ স্থাপন" },
      { now: "বিচার বিভাগের পূর্ণ স্বাধীনতা নেই", proposal: "বিচার বিভাগকে পূর্ণ স্বাধীনতার সাংবিধানিক নিশ্চয়তা" }
    ]
  },
  {
    title: "সাংবিধানিক পদে নিয়োগ ও দুদক",
    pairs: [
      { now: "আইন থাকলেও নির্বাচন কমিশনে নিয়োগ হয় প্রধানমন্ত্রীর মাধ্যমে", proposal: "স্পিকার, বিরোধী দল থেকে নির্বাচিত ডেপুটি স্পিকার, প্রধানমন্ত্রী, বিরোধী দলীয় নেতা ও আপিল বিভাগ প্রভৃতির সমন্বিত কমিটির মাধ্যমে নির্বাচন কমিশনে নিয়োগ" },
      { now: "পিএসসিতে নিয়োগ দেন প্রধানমন্ত্রী", proposal: "স্পিকার ও চিফ হুইপ, বিরোধী দল থেকে নির্বাচিত ডেপুটি স্পিকার ও চিফ হুইপ, বিরোধীদলীয় প্রতিনিধি প্রভৃতির সমন্বিত কমিটির মাধ্যমে পিএসসিতে নিয়োগ" },
      { now: "মহা-হিসাব নিরীক্ষক ও নিয়ন্ত্রক নিয়োগ দেন প্রধানমন্ত্রী", proposal: "বিরোধী দল থেকে নির্বাচিত ডেপুটি স্পিকার, সরকারি দলের নেতা, বিরোধী দলীয় নেতা প্রভৃতির সমন্বিত কমিটির মাধ্যমে নিয়োগ" },
      { now: "আইন থাকলেও দুদকের চেয়ারম্যান ও কমিশনার নিয়োগ প্রধানমন্ত্রীর নিয়ন্ত্রণে", proposal: "দুদককে সাংবিধানিক মর্যাদা দেওয়া এবং সরকার ও বিরোধী দলের প্রতিনিধি প্রভৃতির সমন্বিত কমিটির মাধ্যমে নিয়োগ" },
      { now: "সরকারি কর্মচারীদের বিরুদ্ধে মামলা করতে সরকারের অনুমোদন", proposal: "সরকারি কর্মচারীদের বিরুদ্ধে মামলা করতে সরকারের অনুমোদন লাগবে না দুদকের" }
    ]
  }
];

const elements = {
    dataContainer: document.getElementById('dataContainer'),
    shareBtn: document.getElementById('shareBtn'),
    scrollTopBtn: document.getElementById('scrollTopBtn')
};

function renderData() {
    elements.dataContainer.innerHTML = '';
    
    sections.forEach((section, sectionIndex) => {
        const sectionCard = document.createElement('div');
        sectionCard.className = 'section-card';
        
        const sectionTitle = document.createElement('h2');
        sectionTitle.className = 'section-title';
        sectionTitle.textContent = section.title;
        sectionCard.appendChild(sectionTitle);
        
        const pairsContainer = document.createElement('div');
        pairsContainer.className = 'comparison-pairs';
        
        section.pairs.forEach((pair, pairIndex) => {
            const pairDiv = document.createElement('div');
            pairDiv.className = 'comparison-pair';
            pairDiv.dataset.section = sectionIndex;
            pairDiv.dataset.pair = pairIndex;
            pairDiv.dataset.now = pair.now.toLowerCase();
            pairDiv.dataset.proposal = pair.proposal.toLowerCase();
            
            const comparisonRow = document.createElement('div');
            comparisonRow.className = 'comparison-row';
            
            comparisonRow.innerHTML = `
                <div class="comparison-item comparison-now">
                    <div class="comparison-label">এখন আছে</div>
                    <div class="comparison-text">${pair.now || '(ফাঁকা)'}</div>
                </div>
                <div class="comparison-item comparison-proposal">
                    <div class="comparison-label">চূড়ান্ত প্রস্তাব</div>
                    <div class="comparison-text">${pair.proposal || '(ফাঁকা)'}</div>
                </div>
            `;
            
            pairDiv.appendChild(comparisonRow);
            
            pairsContainer.appendChild(pairDiv);
        });
        
        sectionCard.appendChild(pairsContainer);
        elements.dataContainer.appendChild(sectionCard);
    });
}

async function shareContent() {
    const url = window.location.href;
    const title = document.title || 'জুলাই সনদ: প্রস্তাবিত সংস্কারসমূহ';
    const text = 'জুলাই সনদ: প্রস্তাবিত সংস্কারসমূহ';
    
    // Debug helper
    console.log('navigator.share exists?', !!navigator.share);
    console.log('User agent:', navigator.userAgent);
    
    // Try Web Share API first
    if (navigator.share) {
        try {
            await navigator.share({ title, text, url });
            return; // IMPORTANT: stop here after successful share
        } catch (err) {
            // User cancelled or error occurred
            if (err.name !== 'AbortError') {
                console.error('Share failed:', err);
                // Fall through to modal on error (not cancellation)
            } else {
                return; // User cancelled, don't show modal
            }
        }
    }
    
    // Fallback: show modal
    openShareModal();
}

function openShareModal() {
    const modal = document.getElementById('shareModal');
    const linkInput = document.getElementById('shareLinkInput');
    const url = window.location.href;
    const text = 'জুলাই সনদ: প্রস্তাবিত সংস্কারসমূহ';
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(text);
    const fullText = encodeURIComponent(`${text} ${url}`);
    
    // Set link input value
    linkInput.value = url;
    
    // Set share links
    document.getElementById('shareWhatsApp').href = `https://wa.me/?text=${fullText}`;
    document.getElementById('shareFacebook').href = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    document.getElementById('shareTwitter').href = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
    document.getElementById('shareTelegram').href = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeShareModal() {
    const modal = document.getElementById('shareModal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

function copyShareLink() {
    const linkInput = document.getElementById('shareLinkInput');
    
    // Select and copy text
    linkInput.select();
    linkInput.setSelectionRange(0, 99999); // For mobile devices
    
    try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(linkInput.value).then(() => {
                showToast('লিংক কপি হয়েছে');
            }).catch(() => {
                fallbackCopy(linkInput);
            });
        } else {
            fallbackCopy(linkInput);
        }
    } catch (err) {
        fallbackCopy(linkInput);
    }
}

function fallbackCopy(input) {
    try {
        document.execCommand('copy');
        showToast('লিংক কপি হয়েছে');
    } catch (err) {
        console.error('Copy failed:', err);
        showToast('কপি ব্যর্থ হয়েছে');
    }
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 1500);
}

function handleScroll() {
    if (window.scrollY > 300) {
        elements.scrollTopBtn.classList.add('visible');
    } else {
        elements.scrollTopBtn.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

elements.shareBtn.addEventListener('click', shareContent);
elements.scrollTopBtn.addEventListener('click', scrollToTop);
window.addEventListener('scroll', handleScroll);

// Share modal event listeners
const shareModal = document.getElementById('shareModal');
if (shareModal) {
    shareModal.querySelector('.share-modal-overlay').addEventListener('click', closeShareModal);
    shareModal.querySelector('.share-modal-close').addEventListener('click', closeShareModal);
    document.getElementById('copyLinkBtn').addEventListener('click', copyShareLink);
}

document.addEventListener('DOMContentLoaded', () => {
    renderData();
});
