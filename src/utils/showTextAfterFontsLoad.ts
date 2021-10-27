export const showTextAfterFontsLoad = () =>
	doesBrowserSupportFontsApi()
		? setTimeout(() =>
			waitForFontLoad()
				.then(showTextInDocument))
		: showTextInDocument()

const doesBrowserSupportFontsApi = (): boolean =>
	!!(document && document.fonts)

const waitForFontLoad = () =>
	document.fonts.load('16px "Poppins"')

const showTextInDocument = () =>
	document.documentElement.classList.add('loaded')
