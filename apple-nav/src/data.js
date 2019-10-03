const appleOb= {
    MacObj: {
        MacBookAir: {
            Name: 'MacBook Air',
            src: 'data:image/jpeg;base64,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',
            isNew: true
        }, 
        MacBookPro: {
            Name: 'MacBook Pro',
            src: 'data:image/png;base64,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',
            isNew: true
        },
        iMac: {
            Name: 'iMac',
            src: 'data:image/png;base64,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',
            isNew: false
        },
        iMacPro: {
            Name: 'iMac Pro',
            src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAY1BMVEX////7+/v+/v4AAAABAQHX19dbW1uDg4MLCwvr6+vU1NTDw8O3t7fn5+fAwMARERF9fX1vb2/z8/M8PDzc3Nw2NjbKyspDQ0NMTEwlJSWxsbF4eHinp6cgICDw8PCenp5jY2MIqmchAAACzUlEQVR4nO2b7XKyMBBGA0GC1gpoqtZ+3v9VtitFCIR8SBZ8X3b/OLNxPE8xWc9MgbGHqziOZ+k1S73FKXrEJ/51KYqizuIUvdtaBBVP3nsUfrW4QH69H6rNMQc/rl/n4sf1a/e8LIDfYPuzaRF8mIi3HTgLP2qO4Dx840haAv9Bf5Ng7bM45BlK5Ydib+evXrlaCVSo3qu0Xv8DJp/zg41/weXz5GLZfwUyPyks+z+Ft5Wrv9pArdS6v1dCptRy/q4BhNrTve+enoBLklqcrBUg+PmvApj5rQDh5w8E4GqAvhPeAiDMPwF7UgmgccI6AMb8FXAm2gF0TvYXAGX+C64G0DphFQDn90cNMOBkVQAUfqwEGHLCJkD43992gEEnhACJQOG3Aww7YQrzWuD4RxPA4GQpzGuB4z+3ACYnTGFcChz/qgMYnaQKgMKvA5idCAJwofZCnYkqgMXJUpjXQu2FOhNVADP/NwBXAoSciU0Ag5O0hSQw/xogSc38ToCwvwkCZkzq4oRC7QXi/wYgJyQnJCckJyQnJCckJyQnJCckJyQnJCckJyQnJCckJ3R1wre1Ws9Q43tvzk7I1Qr6vzsnJ0TkuzkhIt/NCd0/9+V4fPHL5OSE7n/XhrGNF9/qhKUX/xbA/TspLU747sXnJylPXvzk3eKE+w8fvn/v49PihGyXYfKznY3PmDxnWPzsLDt8/f2EsQx/7wD0ZG///bv3E663mlpPx2dfuu/6y/OajLmfr9TttXI6Pjvo9vrJiz/khG6fkevOWu7HH3M/odSfdel3JkwjyfIZhX7WFFPxL4l+1mXbETPB+f3R5Tw8a88XZH60TTPz/M+/txEeX+a689/t5RKLz44ufM6PWHy2f7rWDupJrXZvj8XH6RG/vbhAPj1jQs+Y3O1k/wF/nBMG6dEzJgP89sWZsNda7O2JJT33SvyZ+f2RNEXvB/3uSo3HQ5l3AAAAAElFTkSuQmCC',
            isNew: false
        },
        MacPro: {
            Name: 'Mac Pro',
            src: 'data:image/jpeg;base64,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',
            isNew: true
        },
        Compare: {
            Name: 'Compare',
            src: 'data:image/png;base64,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',
            isNew: false
        },
        ProDisplayXDR: {
            Name: 'Pro Display XDR',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMQLx1wtVD8IYLBn2b7O_JAyKV0eY_2tZbkm0BXNwhTCoSSQbeqw',
            isNew: true
        },
        Accessories: {
            Name: 'Accessories',
            src: 'data:image/jpeg;base64,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',
            isNew: false
        },
        Catalina: {
            Name: 'Catalina',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRceW1-XD2-BwbbZP2IFDPT8sCzk_SzoATKlDlq0RDrX0kbXKPO',
            isNew: false
        }
    },
   iPadObject: {
        iPadPro: {
            Name: 'iPad Pro',
            src: '',
            isNew: false,
        },
        iPadAir: {
            Name: 'iPad Air',
            src: '',
            isNew: false,
        },
        iPad: {
            Name: 'iPad',
            src: '',
            isNew: true,
        },
        iPadMini: {
            Name: 'iPad mini',
            src: '',
            isNew: false,
        },
        Compare: {
            Name: 'Compare',
            src: '',
            isNew: false,
        },
        ApplePencil: {
            Name: 'Apple Pencil',
            src: '',
            isNew: false,
        },
        SmartKeyboard: {
            Name: 'Smart Keyboard',
            src: '',
            isNew: false,
        },
        Accessories: {
            Name: 'Accessories',
            src: '',
            isNew: false,
        },
        iPadOS: {
            Name: 'iPadOS',
            src: '',
            isNew: true,
        },

    } ,
    iPhoneObj: {
        iPhone11Pro: {
            Name: 'iPhone 11 Pro',
            src: '',
            isNew: true,
        },
        iPhone11: {
            Name: 'iPhone 11',
            src: '',
            isNew: true,
        },
        iPhoneXR: {
            Name: 'iPhone XR',
            src: '',
            isNew: false,
        },
        iPhone8: {
            Name: 'iPhone 8',
            src: '',
            isNew: false,
        },
        Compare: {
            Name: 'Compare',
            src: '',
            isNew: false,
        },
        AppleCard: {
            Name: 'Apple Card',
            src: '',
            isNew: false,
        },
        AirPods: {
            Name: 'AirPods',
            src: '',
            isNew: false,
        },
        Accessories: {
            Name: 'Accessories',
            src: '',
            isNew: false,
        },
        iOS13: {
            Name: 'iOS 13',
            src: '',
            isNew: false,
        },
    },
    WatchObj: {
        iPadOS: {
            Name: 'iPadOS',
            src: '',
            isNew: true,
        },
        iPadOS: {
            Name: 'iPadOS',
            src: '',
            isNew: true,
        },
        iPadOS: {
            Name: 'iPadOS',
            src: '',
            isNew: true,
        },
        iPadOS: {
            Name: 'iPadOS',
            src: '',
            isNew: true,
        },
        iPadOS: {
            Name: 'iPadOS',
            src: '',
            isNew: true,
        },
        iPadOS: {
            Name: 'iPadOS',
            src: '',
            isNew: true,
        },
        iPadOS: {
            Name: 'iPadOS',
            src: '',
            isNew: true,
        },
        iPadOS: {
            Name: 'iPadOS',
            src: '',
            isNew: true,
        },
        iPadOS: {
            Name: 'iPadOS',
            src: '',
            isNew: true,
        },
        iPadOS: {
            Name: 'iPadOS',
            src: '',
            isNew: true,
        },
    },
    TVObj: {
        iPadOS: {
            Name: 'iPadOS',
            src: '',
            isNew: true,
        },
    },
    MusicObj: {
        
    },
    SupportObj: {

    }