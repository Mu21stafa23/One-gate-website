# Example: How to Use Translations in Your Components

Now that the language system is set up, here's how to use it in any component:

## 1. Import the useLanguage hook:
```tsx
'use client'
import { useLanguage } from '@/app/context/LanguageContext';
```

## 2. Use it in your component:
```tsx
export default function MyComponent() {
  const { t, language } = useLanguage();
  
  return (
    <div>
      <h1>{t('nav.home')}</h1>
      <p>{t('about.description')}</p>
    </div>
  );
}
```

## 3. Update your components to use translations:

### Example: Divider Component
```tsx
'use client'
import { useLanguage } from '@/app/context/LanguageContext';

export default function Divider({ textKey }: { textKey: string }) {
  const { t } = useLanguage();
  
  return (
    <div className="py-8">
      <h2>{t(textKey)}</h2>
    </div>
  );
}
```

### Example: ContactForm Component
```tsx
'use client'
import { useLanguage } from '@/app/context/LanguageContext';

export default function ContactForm() {
  const { t } = useLanguage();
  
  return (
    <form>
      <input placeholder={t('contact.name')} />
      <input placeholder={t('contact.email')} />
      <textarea placeholder={t('contact.message')} />
      <button>{t('contact.send')}</button>
    </form>
  );
}
```

## 4. Add new translations:

To add more translations, edit `app/context/LanguageContext.tsx` and add to the translations object:

```tsx
const translations = {
  en: {
    yourSection: {
      title: 'Your Title',
      description: 'Your description',
    },
  },
  ar: {
    yourSection: {
      title: 'عنوانك',
      description: 'وصفك',
    },
  },
};
```

## How it works:
- Click the language button in the navbar to switch between English and Arabic
- The entire page will automatically update with the new language
- The language preference is saved in localStorage
- The page direction (RTL for Arabic) is automatically handled
- All components using `t()` will display the correct translation
