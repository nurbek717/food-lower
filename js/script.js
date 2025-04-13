"use strict"

import tabs from "./modules/tabs";
import loader from "./modules/loader";
import timer from "./modules/timer";
import modal, { openModal } from "./modules/modal";
import classCard from "./modules/class";
import forms from "./modules/forms";
import slider from "./modules/silider";
window.addEventListener('DOMContentLoaded', () => {
	const modalTimerId = setTimeout(
		() => openModal('.modal__content', '.modal', modalTimerId),
		50000
	)

	tabs('.tabheader__item', '.tab_content', '.tabheader__items')
	loader('.loader_wrapper')
	timer('2025-06-01', '.timer')
	modal('[data-modal]', '.modal', '.modal__content', modalTimerId)
	classCard('.offers-items')
	forms('form', modalTimerId)
	slider()
})

