import React, { useState, useEffect, useRef } from 'react';
import { 
  Download, 
  Copy, 
  Share2, 
  RefreshCw, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  AlignJustify, 
  ArrowRight,
  ExternalLink,
  Smartphone,
  Plus
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Authentic SVG Icons as requested by the user
const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const TikTokIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.525.02c1.31-.01 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.74-3.94-1.78-.22-.22-.41-.47-.59-.73v7.02c0 3.11-1.63 6.07-4.57 7.07-3.02 1.1-6.64.44-8.91-1.78-2.52-2.3-3.06-6.32-1.34-9.3 1.63-2.95 5.3-4.43 8.61-3.61v4.06c-1.85-.56-3.98.05-5.06 1.67-.99 1.41-.85 3.51.35 4.75 1.25 1.34 3.47 1.61 5 .59.62-.39.99-1.07.99-1.8V.02z" />
  </svg>
);

const InstagramIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const TelegramIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.87 4.326-2.962-.924c-.643-.204-.658-.643.136-.953l11.57-4.458c.536-.196.104-.153.829.176.326.15.295.426.113.804z" />
  </svg>
);

// Background configurations from the original source
interface BackgroundConfig {
  id: number;
  name: string;
  displayName: string;
  animeName: string;
  url: string;
  textZone: { x: number; y: number; w: number; h: number };
  usernameZone: { x: number; y: number; w: number; h: number };
  usernameFontSize: number;
  textColor: string;
  accentColor: string;
  defaultQuote: string;
  defaultAuthor: string;
  avatarUrl: string; // Miniature avatar for character selector
}

const BACKGROUNDS: Record<number, BackgroundConfig> = {
  10: {
    id: 10,
    name: 'ayanokoji',
    displayName: 'Ayanokoji',
    animeName: 'Classroom of the Elite',
    url: 'https://cdn.jsdelivr.net/gh/Ditzzx-vibecoder/Assets@main/Image/ayanolkoji.png',
    textZone: { x: 62, y: 79, w: 505, h: 879 },
    usernameZone: { x: 200, y: 956, w: 220, h: 50 },
    usernameFontSize: 28,
    textColor: '#111111',
    accentColor: '#6366f1',
    defaultQuote: 'Semua manusia hanyalah alat. Tidak peduli bagaimana prosesnya, tidak peduli apa yang harus dikorbankan. Selama pada akhirnya aku menang, itu sudah cukup.',
    defaultAuthor: '- Ayanokoji',
    avatarUrl: 'https://cdn.jsdelivr.net/gh/Ditzzx-vibecoder/Assets@main/Image/ayanolkoji.png'
  },
  2: {
    id: 2,
    name: 'gojo',
    displayName: 'Gojo Satoru',
    animeName: 'Jujutsu Kaisen',
    url: 'https://cdn.jsdelivr.net/gh/Ditzzx-vibecoder/Assets@main/qca/gok.png',
    textZone: { x: 755, y: 68, w: 466, h: 1027 },
    usernameZone: { x: 863, y: 1108, w: 249, h: 50 },
    usernameFontSize: 28,
    textColor: '#111111',
    accentColor: '#3b82f6',
    defaultQuote: 'Jangan khawatir, aku adalah yang terkuat di dunia ini.',
    defaultAuthor: '- Gojo Satoru',
    avatarUrl: 'https://cdn.jsdelivr.net/gh/Ditzzx-vibecoder/Assets@main/qca/gok.png'
  },
  3: {
    id: 3,
    name: 'yuji',
    displayName: 'Yuji Itadori',
    animeName: 'Jujutsu Kaisen',
    url: 'https://cdn.jsdelivr.net/gh/Ditzzx-vibecoder/Assets@main/qca/cc.png',
    textZone: { x: 35, y: 68, w: 466, h: 1027 },
    usernameZone: { x: 133, y: 1108, w: 249, h: 50 },
    usernameFontSize: 28,
    textColor: '#111111',
    accentColor: '#ef4444',
    defaultQuote: 'Aku tidak ingin menyesali cara hidupku sendiri. Aku ingin menyelamatkan orang lain.',
    defaultAuthor: '- Yuji Itadori',
    avatarUrl: 'https://cdn.jsdelivr.net/gh/Ditzzx-vibecoder/Assets@main/qca/cc.png'
  },
  4: {
    id: 4,
    name: 'denji',
    displayName: 'Denji',
    animeName: 'Chainsaw Man',
    url: 'https://cdn.jsdelivr.net/gh/Ditzzx-vibecoder/Assets@main/qca/denji.png',
    textZone: { x: 655, y: 68, w: 512, h: 1083 },
    usernameZone: { x: 795, y: 1152, w: 249, h: 50 },
    usernameFontSize: 28,
    textColor: '#111111',
    accentColor: '#f97316',
    defaultQuote: 'Jika impian semua orang begitu luar biasa, maka aku akan menunjukkan kepada kalian impian yang biasa!',
    defaultAuthor: '- Denji',
    avatarUrl: 'https://cdn.jsdelivr.net/gh/Ditzzx-vibecoder/Assets@main/qca/denji.png'
  },
  5: {
    id: 5,
    name: 'thorfin',
    displayName: 'Thorfinn',
    animeName: 'Vinland Saga',
    url: 'https://cdn.jsdelivr.net/gh/Ditzzx-vibecoder/Assets@main/qca/thorfin.png',
    textZone: { x: 65, y: 54, w: 489, h: 992 },
    usernameZone: { x: 162, y: 1042, w: 249, h: 50 },
    usernameFontSize: 28,
    textColor: '#111111',
    accentColor: '#eab308',
    defaultQuote: 'Kamu tidak memiliki musuh. Tidak ada seorang pun di dunia ini yang pantas menjadi musuhmu.',
    defaultAuthor: '- Thorfinn',
    avatarUrl: 'https://cdn.jsdelivr.net/gh/Ditzzx-vibecoder/Assets@main/qca/thorfin.png'
  },
  6: {
    id: 6,
    name: 'naruto',
    displayName: 'Naruto',
    animeName: 'Naruto Shippuden',
    url: 'https://cdn.jsdelivr.net/gh/Ditzzx-vibecoder/Assets@main/qca/Naruto.png',
    textZone: { x: 40, y: 56, w: 481, h: 1065 },
    usernameZone: { x: 170, y: 1126, w: 228, h: 50 },
    usernameFontSize: 28,
    textColor: '#111111',
    accentColor: '#f97316',
    defaultQuote: 'Aku tidak akan menarik kembali kata-kataku, karena itulah jalan ninjaku!',
    defaultAuthor: '- Naruto Uzumaki',
    avatarUrl: 'https://cdn.jsdelivr.net/gh/Ditzzx-vibecoder/Assets@main/qca/Naruto.png'
  },
  7: {
    id: 7,
    name: 'light',
    displayName: 'Light Yagami',
    animeName: 'Death Note',
    url: 'https://cdn.jsdelivr.net/gh/Ditzzx-vibecoder/Assets@main/qca/LIghtyagami.png',
    textZone: { x: 38, y: 56, w: 493, h: 941 },
    usernameZone: { x: 170, y: 1025, w: 228, h: 50 },
    usernameFontSize: 28,
    textColor: '#111111',
    accentColor: '#dc2626',
    defaultQuote: 'Dunia ini sudah busuk, dan mereka yang busuk layak dimusnahkan agar dunia ini menjadi bersih kembali.',
    defaultAuthor: '- Light Yagami',
    avatarUrl: 'https://cdn.jsdelivr.net/gh/Ditzzx-vibecoder/Assets@main/qca/LIghtyagami.png'
  },
  8: {
    id: 8,
    name: 'higuruma',
    displayName: 'Higuruma',
    animeName: 'Jujutsu Kaisen',
    url: 'https://cdn.jsdelivr.net/gh/Ditzzx-vibecoder/Assets@main/qca/higuruma.png',
    textZone: { x: 755, y: 68, w: 424, h: 920 },
    usernameZone: { x: 840, y: 993, w: 249, h: 50 },
    usernameFontSize: 28,
    textColor: '#111111',
    accentColor: '#10b981',
    defaultQuote: 'Ketika keadilan ditolak, maka aturan hukum harus ditegakkan dengan tegas tanpa pandang bulu.',
    defaultAuthor: '- Higuruma Hiromi',
    avatarUrl: 'https://cdn.jsdelivr.net/gh/Ditzzx-vibecoder/Assets@main/qca/higuruma.png'
  },
  9: {
    id: 9,
    name: 'elina',
    displayName: 'Elina',
    animeName: 'Original Character',
    url: 'https://cdn.jsdelivr.net/gh/Ditzzx-vibecoder/Assets@main/Image/elina.png',
    textZone: { x: 680, y: 101, w: 505, h: 970 },
    usernameZone: { x: 831, y: 1068, w: 220, h: 50 },
    usernameFontSize: 28,
    textColor: '#111111',
    accentColor: '#ec4899',
    defaultQuote: 'Temukan aku di duniamu.',
    defaultAuthor: '- Elina',
    avatarUrl: 'https://cdn.jsdelivr.net/gh/Ditzzx-vibecoder/Assets@main/Image/elina.png'
  },
  1: {
    id: 1,
    name: 'l',
    displayName: 'L Lawliet',
    animeName: 'Death Note',
    url: 'https://cdn.jsdelivr.net/gh/Ditzzx-vibecoder/Assets@main/qca/L.png',
    textZone: { x: 775, y: 56, w: 456, h: 1102 },
    usernameZone: { x: 890, y: 1167, w: 228, h: 50 },
    usernameFontSize: 28,
    textColor: '#111111',
    accentColor: '#3b82f6',
    defaultQuote: 'Tidak peduli seberapa jeniusnya dirimu, jika kamu sendirian, kamu tidak akan bisa mengubah dunia ini.',
    defaultAuthor: '- L Lawliet',
    avatarUrl: 'https://cdn.jsdelivr.net/gh/Ditzzx-vibecoder/Assets@main/qca/L.png'
  }
};

// Canvas core functions
function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const out: string[] = [];
  text.split('\n').forEach(p => {
    let cur = '';
    p.split(' ').forEach(w => {
      const t = cur ? cur + ' ' + w : w;
      if (ctx.measureText(t).width > maxWidth && cur) { 
        out.push(cur); 
        cur = w; 
      } else {
        cur = t;
      }
    });
    out.push(cur);
  });
  return out;
}

function fitTextInZone(
  ctx: CanvasRenderingContext2D, 
  text: string, 
  zone: { w: number; h: number }, 
  opts: { fontWeight: number; fontFamily: string; initialSize: number; minSize: number }
) {
  const { fontWeight, fontFamily, initialSize, minSize = 10 } = opts;
  const step = 2;
  let fontSize = initialSize;
  let lines: string[] = [];
  let lh = fontSize * 1.2;

  while (fontSize >= minSize) {
    ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
    lines = wrapText(ctx, text, zone.w);
    lh = fontSize * 1.2;
    if (lines.length * lh <= zone.h) break;
    fontSize -= step;
  }
  if (fontSize < minSize) {
    fontSize = minSize;
    ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
    lines = wrapText(ctx, text, zone.w);
    lh = fontSize * 1.2;
  }
  return { fontSize, lines, lh };
}

function drawJustifiedLine(ctx: CanvasRenderingContext2D, line: string, x: number, y: number, targetWidth: number) {
  const words = line.split(' ');
  if (words.length === 1) {
    ctx.textAlign = 'center';
    ctx.fillText(line, x + targetWidth / 2, y);
    return;
  }
  const wordWidths = words.map(w => ctx.measureText(w).width);
  const totalWordsWidth = wordWidths.reduce((a, b) => a + b, 0);
  const spaceWidth = (targetWidth - totalWordsWidth) / (words.length - 1);

  ctx.textAlign = 'left';
  let cx = x;
  words.forEach((w, i) => {
    ctx.fillText(w, cx, y);
    cx += wordWidths[i] + spaceWidth;
  });
}

function drawQuoteText(
  ctx: CanvasRenderingContext2D, 
  text: string, 
  zone: { x: number; y: number; w: number; h: number }, 
  opts: { fontWeight: number; fontFamily: string; color: string; align: 'justify' | 'left' | 'center' | 'right'; initialSize: number; minSize: number }
): number {
  const { fontSize, lines, lh } = fitTextInZone(ctx, text, zone, opts);
  ctx.font = `${opts.fontWeight} ${fontSize}px ${opts.fontFamily}`;

  ctx.save();
  ctx.beginPath();
  ctx.rect(zone.x, zone.y, zone.w, zone.h);
  ctx.clip();
  const startY = zone.y + zone.h / 2 - (lines.length * lh) / 2 + lh / 2;

  if (opts.align === 'justify') {
    lines.forEach((l, i) => {
      const y = startY + i * lh;
      const isLastLine = i === lines.length - 1;
      if (isLastLine) {
        ctx.textAlign = 'center';
        ctx.fillText(l, zone.x + zone.w / 2, y);
      } else {
        drawJustifiedLine(ctx, l, zone.x, y, zone.w);
      }
    });
  } else {
    const drawX = opts.align === 'center' ? zone.x + zone.w / 2 : opts.align === 'right' ? zone.x + zone.w : zone.x;
    ctx.textAlign = opts.align;
    lines.forEach((l, i) => {
      ctx.fillText(l, drawX, startY + i * lh);
    });
  }
  ctx.restore();

  return startY + (lines.length - 1) * lh + lh / 2;
}

function drawUsernameText(
  ctx: CanvasRenderingContext2D, 
  text: string, 
  x: number, 
  y: number, 
  opts: { fontWeight: number; fontFamily: string; color: string; align: string; gap: number }, 
  fontSize: number, 
  maxWidth: number
) {
  ctx.font = `${opts.fontWeight} ${fontSize}px ${opts.fontFamily}`;
  ctx.textAlign = 'center';
  const lh = fontSize * 1.2;
  const lines = wrapText(ctx, text, maxWidth);
  lines.forEach((l, i) => {
    ctx.fillText(l, x, y + i * lh);
  });
}

export default function App() {
  // Configured default value with selected character
  const [selectedBgId, setSelectedBgId] = useState<number>(10);
  const [text, setText] = useState('Semua manusia hanyalah alat');
  const [username, setUsername] = useState('- Ayanokoji');
  const [alignment, setAlignment] = useState<'justify' | 'left' | 'center' | 'right'>('justify');
  const [initialSize, setInitialSize] = useState<number>(75);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fontStatus, setFontStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [forceRedraw, setForceRedraw] = useState<number>(0);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Splashscreen state
  const [showSplash, setShowSplash] = useState<boolean>(true);

  // PWA Install Prompt state
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesCacheRef = useRef<Record<string, HTMLImageElement>>({});

  const triggerNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // Splashscreen timer (2.5 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Capture PWA Install Prompt
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallPWA = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`PWA Install Choice Outcome: ${outcome}`);
    setDeferredPrompt(null);
    setIsInstallable(false);
    triggerNotification('Terima kasih telah menambahkan Quotes Editor ke beranda!', 'success');
  };

  // Load ARIALN font on mount
  useEffect(() => {
    const loadFont = async () => {
      try {
        const font = new FontFace(
          'arialn',
          'url(https://cdn.jsdelivr.net/gh/Ditzzx-vibecoder/Assets@main/Font/ARIALN.ttf)'
        );
        await font.load();
        document.fonts.add(font);
        setFontStatus('loaded');
        setForceRedraw(prev => prev + 1);
      } catch (err) {
        console.error('Failed loading arialn font:', err);
        setFontStatus('error');
      }
    };
    loadFont();
  }, []);

  // Update default text and author name on background selection
  const handleSelectCharacter = (bgId: number) => {
    const bg = BACKGROUNDS[bgId];
    if (bg) {
      setSelectedBgId(bgId);
      setText(bg.defaultQuote);
      setUsername(bg.defaultAuthor);
      triggerNotification(`Karakter ${bg.displayName} dipilih! Konten diperbarui.`, 'success');
    }
  };

  // Handle rendering process efficiently
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const bg = BACKGROUNDS[selectedBgId];
    if (!bg) return;

    let isCancelled = false;

    const draw = async () => {
      setIsLoading(true);
      try {
        let img = imagesCacheRef.current[bg.url];
        if (!img) {
          img = new Image();
          img.crossOrigin = 'anonymous';
          img.src = bg.url;
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = () => reject(new Error('Gagal memuat latar belakang'));
          });
          imagesCacheRef.current[bg.url] = img;
        }

        if (isCancelled) return;

        // Clear canvas and draw background
        ctx.clearRect(0, 0, 1254, 1254);
        ctx.drawImage(img, 0, 0, 1254, 1254);

        // Draw Quote Text
        ctx.save();
        ctx.fillStyle = '#111111';
        ctx.textBaseline = 'middle';

        const textOpts = {
          fontWeight: 400,
          fontFamily: 'arialn, sans-serif',
          color: '#111111',
          align: alignment,
          initialSize: initialSize,
          minSize: 24
        };

        const quoteEndY = drawQuoteText(ctx, text, bg.textZone, textOpts);
        ctx.restore();

        // Draw Author Name
        ctx.save();
        ctx.fillStyle = '#121212';
        ctx.textBaseline = 'middle';
        const usernameX = bg.textZone.x + bg.textZone.w / 2;
        const usernameY = quoteEndY + 40; // 40px gap

        const usernameOpts = {
          fontWeight: 500,
          fontFamily: 'Inter, sans-serif',
          color: '#121212',
          align: 'center',
          gap: 40
        };

        drawUsernameText(ctx, username, usernameX, usernameY, usernameOpts, bg.usernameFontSize, bg.textZone.w);
        ctx.restore();

      } catch (err) {
        console.error('Render error:', err);
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    };

    draw();

    return () => {
      isCancelled = true;
    };
  }, [text, username, selectedBgId, alignment, initialSize, forceRedraw]);

  // Export high-res canvas
  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      const activeChar = BACKGROUNDS[selectedBgId];
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `QuoteAnime-${activeChar.name}-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
      triggerNotification('Gambar berhasil diunduh ke galeri!', 'success');
    } catch (err) {
      console.error(err);
      triggerNotification('Gagal mengunduh gambar.', 'error');
    }
  };

  const handleCopyToClipboard = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      canvas.toBlob(async (blob) => {
        if (!blob) {
          triggerNotification('Gagal mengonversi canvas.', 'error');
          return;
        }
        try {
          const item = new ClipboardItem({ 'image/png': blob });
          await navigator.clipboard.write([item]);
          triggerNotification('Salin berhasil! Anda bisa langsung paste di WhatsApp.', 'success');
        } catch (clipErr) {
          console.error(clipErr);
          triggerNotification('Gagal menyalin langsung. Gunakan tombol Unduh.', 'error');
        }
      }, 'image/png');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {/* Animated Splash Screen */}
      <AnimatePresence mode="wait">
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
            className="fixed inset-0 bg-[#0f172a] z-50 flex flex-col items-center justify-center p-4 select-none"
          >
            <div className="text-center flex flex-col items-center max-w-sm w-full">
              {/* Pulsing Avatar Container with Emerald Border Glow */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: { delay: 0.2, duration: 0.8, type: 'spring', stiffness: 100 }
                }}
                className="relative mb-6"
              >
                {/* Glowing Outer Rings */}
                <div className="absolute -inset-4 rounded-full bg-emerald-500/10 blur-xl animate-pulse" />
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
                  className="absolute -inset-2 rounded-full border-2 border-dashed border-emerald-500/30"
                />
                
                <img 
                  src="/images.jpeg" 
                  alt="App Icon" 
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#1e293b] shadow-2xl relative z-10"
                />
              </motion.div>

              {/* Developer Signature Branding */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } }}
                className="mb-2"
              >
                <span className="text-emerald-400 font-bold tracking-wider text-xs block px-4 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-800/40 font-mono shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                  ✧･ﾟ: [𝙍]𝙝𝙢𝙏 | 𝘾𝙤𝙙𝙚⚙️𝘼𝙄 𝙡 :･ﾟ✧
                </span>
              </motion.div>

              {/* App Title */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.5 } }}
                className="text-2xl font-black tracking-tight text-white mt-2 font-display"
              >
                Quotes Editor Anime
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.9, duration: 0.5 } }}
                className="text-[10px] font-mono text-slate-400 mt-2"
              >
                Rendering Engine v1.0.0
              </motion.p>

              {/* Cool Minimalist Glowing Loading bar */}
              <div className="w-48 h-1 bg-slate-800 rounded-full mt-8 overflow-hidden relative">
                <motion.div 
                  initial={{ left: '-100%' }}
                  animate={{ left: '100%' }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                  className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_8px_#34d399]"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col selection:bg-slate-200 selection:text-slate-900">
        
        {/* Dynamic Pop-up Alert */}
        {notification && (
          <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-sm">
            <div className={`p-3 rounded-lg shadow-xl border text-center text-xs font-medium ${
              notification.type === 'success' 
                ? 'bg-white border-emerald-200 text-emerald-600' 
                : 'bg-white border-rose-200 text-rose-600'
            }`}>
              {notification.message}
            </div>
          </div>
        )}

        {/* Main Top Studio Area - Clean Pure White (Minimal Elements) */}
        <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 flex flex-col items-center">
          
          {/* Title / Brand Header */}
          <div className="text-center mb-6 flex flex-col items-center">
            {isInstallable && (
              <button
                onClick={handleInstallPWA}
                className="mb-4 flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 text-emerald-600 hover:text-emerald-500 text-[11px] font-bold shadow-sm transition-all duration-300 cursor-pointer animate-pulse"
              >
                <Smartphone className="h-3.5 w-3.5" /> Pasang Aplikasi (PWA)
              </button>
            )}
            <h1 className="text-2xl font-bold tracking-tight text-slate-950 font-display">
              Quotes Editor
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Dibuat secara instan, estetis, dan ringan dengan teknologi pemrosesan langsung di browser.
            </p>
          </div>

        {/* Smartphone-like Polaroid Canvas Preview Container */}
        <div className="relative w-full max-w-[380px] aspect-square rounded-2xl overflow-hidden bg-white shadow-xl border border-slate-100 flex items-center justify-center">
          {isLoading && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] flex flex-col items-center justify-center gap-2 z-10">
              <RefreshCw className="h-5 w-5 text-emerald-600 animate-spin" />
              <span className="text-[10px] font-mono text-slate-400">Rendering...</span>
            </div>
          )}
          <canvas
            ref={canvasRef}
            width={1254}
            height={1254}
            className="w-full h-full object-contain bg-white"
          />
        </div>

        {/* Modular Character Selector - Horizontal Slider directly below the canvas */}
        <div className="w-full max-w-[440px] mt-6">
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 text-center">
            Pilih Karakter &amp; Template Latar Belakang
          </p>
          <div className="flex gap-2 overflow-x-auto pb-3 pt-1 px-1 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
            {Object.values(BACKGROUNDS).map((char) => {
              const isSelected = selectedBgId === char.id;
              return (
                <button
                  key={char.id}
                  onClick={() => handleSelectCharacter(char.id)}
                  className={`flex-shrink-0 flex items-center gap-2.5 px-3 py-2 rounded-full border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <img
                    src={char.avatarUrl}
                    alt={char.displayName}
                    className="w-5 h-5 rounded-full object-cover border border-slate-100"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback icon color circle if image fails to load
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold whitespace-nowrap leading-none">{char.displayName}</span>
                    <span className="text-[9px] text-slate-400 whitespace-nowrap leading-none mt-0.5">{char.animeName}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Inputs & Controls Card (Simplified, Minimal Elements) */}
        <div className="w-full max-w-[440px] bg-white border border-slate-100 p-4 rounded-2xl shadow-sm mt-3 flex flex-col gap-4">
          
          {/* Quote Text Area */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Teks Quote</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Ketik kata-kata quote di sini..."
              rows={3}
              maxLength={250}
              className="w-full bg-slate-50 border border-slate-100 rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-300 transition resize-none"
            />
          </div>

          {/* Author Name Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Nama Author / Karakter</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Contoh: - Ayanokoji"
              className="w-full bg-slate-50 border border-slate-100 rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-300 transition"
            />
          </div>

          {/* Inline Alignment, Size Adjusters */}
          <div className="grid grid-cols-2 gap-3 pt-1 border-t border-slate-50">
            
            {/* Quick Alignment Pills */}
            <div className="flex flex-col gap-1">
              <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">Format Teks</span>
              <div className="flex gap-1 bg-slate-50 p-1 rounded-lg border border-slate-100">
                {(['justify', 'left', 'center', 'right'] as const).map((align) => {
                  const Icon = {
                    justify: AlignJustify,
                    left: AlignLeft,
                    center: AlignCenter,
                    right: AlignRight,
                  }[align];
                  const isActive = alignment === align;
                  return (
                    <button
                      key={align}
                      onClick={() => setAlignment(align)}
                      className={`flex-1 py-1 rounded flex items-center justify-center transition-all cursor-pointer ${
                        isActive ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      <Icon className="h-3 w-3" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Font Size Pills */}
            <div className="flex flex-col gap-1">
              <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">Ukuran Font ({initialSize}px)</span>
              <div className="flex gap-1 bg-slate-50 p-1 rounded-lg border border-slate-100">
                <button
                  onClick={() => setInitialSize(prev => Math.max(30, prev - 5))}
                  className="flex-1 py-0.5 text-xs font-bold hover:bg-slate-200 rounded text-slate-600 cursor-pointer"
                >
                  A-
                </button>
                <span className="w-px bg-slate-200 my-1" />
                <button
                  onClick={() => setInitialSize(prev => Math.min(110, prev + 5))}
                  className="flex-1 py-0.5 text-xs font-bold hover:bg-slate-200 rounded text-slate-600 cursor-pointer"
                >
                  A+
                </button>
              </div>
            </div>

          </div>

          {/* Clear Actions (Download & Copy to Clipboard) */}
          <div className="grid grid-cols-2 gap-3 mt-1">
            <button
              onClick={handleDownload}
              className="py-3 px-4 rounded-xl font-semibold text-xs bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" /> Unduh PNG
            </button>
            <button
              onClick={handleCopyToClipboard}
              className="py-3 px-4 rounded-xl font-semibold text-xs bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <Copy className="h-3.5 w-3.5" /> Salin Gambar
            </button>
          </div>

        </div>

      </div>

      {/* Footer Area - Distinct High-Contrast Dark Slate/Gray Layout as requested */}
      <footer className="mt-auto bg-[#121212] border-t border-zinc-900 text-zinc-300 py-12 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          
          {/* Dev Channel invitation Widget */}
          <div className="bg-zinc-900/60 border border-zinc-800/80 p-5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4 flex-col sm:flex-row text-center sm:text-left">
              <img 
                src="pp-dev.png" 
                alt="✧･ﾟ: [𝙍]𝙝𝙢𝙏" 
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback to high quality external link avatar if local server image not ready
                  (e.target as HTMLImageElement).src = 'https://cdn.jsdelivr.net/gh/Ditzzx-vibecoder/Assets@main/Image/elina.png';
                }}
                className="w-14 h-14 rounded-full border-2 border-emerald-500/40 object-cover shadow-lg"
              />
              <div>
                <h3 className="font-display font-bold text-zinc-100 text-sm flex items-center gap-1.5 justify-center sm:justify-start">
                  ✧･ﾟ: [𝙍]𝙝𝙢𝙏 | 𝘾𝙤𝙙𝙚⚙️𝘼𝙄 𝙡 :･ﾟ✧
                </h3>
                <p className="text-xs text-zinc-400 mt-1 max-w-md">
                  Gabung saluran WhatsApp resmi sekarang untuk update script, engine AI, template desain, dan diskusi pemrograman gratis.
                </p>
              </div>
            </div>
            
            <a 
              href="https://whatsapp.com/channel/0029VbBjyjlJ93wa6hwSWa0p" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs flex items-center gap-2 transition-all flex-shrink-0 shadow-md shadow-emerald-900/20"
            >
              <WhatsAppIcon className="h-4 w-4" /> Join Channel WA
            </a>
          </div>

          {/* Social Networks Row (Only pure rounded icons as requested) */}
          <div className="flex flex-col items-center justify-center gap-3 border-t border-zinc-950 pt-6">
            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-semibold">Social Media Developer</span>
            <div className="flex items-center justify-center gap-4">
              {/* WhatsApp */}
              <a 
                href="https://whatsapp.com/channel/0029VbBjyjlJ93wa6hwSWa0p" 
                target="_blank" 
                rel="noopener noreferrer"
                title="WhatsApp Channel [𝙍]𝙝𝙢𝙏"
                className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-[#25D366] text-zinc-400 hover:text-white flex items-center justify-center border border-zinc-800 transition-all duration-300"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/rahmt_nhw?igsh=MWQwcnB3bTA2ZnVidg==" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Instagram @rahmt_nhw"
                className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-[#E1306C] text-zinc-400 hover:text-white flex items-center justify-center border border-zinc-800 transition-all duration-300"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>

              {/* TikTok */}
              <a 
                href="https://www.tiktok.com/@r_hmtofc?_r=1&_t=ZS-94KRfWQjeUu" 
                target="_blank" 
                rel="noopener noreferrer"
                title="TikTok @r_hmtofc"
                className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-black text-zinc-400 hover:text-white flex items-center justify-center border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>

              {/* Telegram */}
              <a 
                href="https://t.me/rAi_engine" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Telegram rAi_engine"
                className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-[#0088cc] text-zinc-400 hover:text-white flex items-center justify-center border border-zinc-800 transition-all duration-300"
              >
                <TelegramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Simple Clean Credits bottom row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-500 text-xs border-t border-zinc-950 pt-6">
            <p className="flex items-center gap-1">
              Credit by 
              <a href="https://whatsapp.com/channel/0029VbBjyjlJ93wa6hwSWa0p" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-medium">rhmt</a> 
              &amp; source by 
              <a href="https://whatsapp.com/channel/0029Vb6GMVNGehERPKx21D20" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-medium">ditzz</a>.
            </p>
            <div className="flex gap-4">
              <a href="https://whatsapp.com/channel/0029VbBjyjlJ93wa6hwSWa0p" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition flex items-center gap-1">
                WhatsApp Rhmt <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>

        </div>
      </footer>

    </div>
    </>
  );
}
