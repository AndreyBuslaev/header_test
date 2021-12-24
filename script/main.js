
const header = document.querySelector('#header');

const div = () => document.createElement('div');
const h1 = () => document.createElement('h1');;
const img = () => document.createElement('img');
const p = () => document.createElement('p');
const a = () => document.createElement('a');
const button = () => document.createElement('button');

const block = header.appendChild(div());
block.classList.add('block');

const blockItems = block.appendChild(div());
blockItems.classList.add('block-items');

// block-items__logo

const blockItemsLogo = blockItems.appendChild(div());
blockItemsLogo.classList.add('block-items__logo', 'flex-item');

const logo = blockItemsLogo.appendChild(img());
// logo.setAttribute('src', './images/logo.png');
// logo.setAttribute('alt', 'logo');
setAttr(logo, './images/logo.png', 'logo')

const widget = blockItemsLogo.appendChild(div());
widget.classList.add('widget');

const sound = widget.appendChild(img());
// sound.setAttribute('src', './images/sound.png');
// sound.setAttribute('alt', 'sound');
setAttr(sound, './images/sound.png',)
sound.classList.add('img-sound', 'sound');

const contentChoice = widget.appendChild(p());
contentChoice.classList.add('content-choice');
contentChoice.textContent = 'OUR TOP CHOICE';

// block-items__content-welcome

const blockItemsContentWelcome = blockItems.appendChild(div());
blockItemsContentWelcome.classList.add('block-items__content-welcome', 'flex-item');

const contentWelcome = blockItemsContentWelcome.appendChild(p());
contentWelcome.classList.add('content-welcome');
contentWelcome.textContent = 'Welcome Bonus';

const contentDeposit = blockItemsContentWelcome.appendChild(p());
contentDeposit.classList.add('content-deposit', 'desktop-content');
contentDeposit.innerHTML = 'Deposit £10<br> Get up to 500 Free Spins';

const contentDepositMobile = blockItemsContentWelcome.appendChild(p());
contentDepositMobile.classList.add('content-deposit', 'desktop-content-mobile');
contentDepositMobile.innerHTML = 'Up to £25<br> New Player Bonus';

const linkPaySafe = blockItemsContentWelcome.appendChild(a());
linkPaySafe.setAttribute('href', '#');
linkPaySafe.classList.add('link__play-safe', 'desktop-mobile-content');
linkPaySafe.textContent = '18+. Play Safe. Opt in required.';

createLine().classList.add('block-items__line', 'desktop-mobile-content');

// block-items__stars

const blockItemsStars = blockItems.appendChild(div());
blockItemsStars.classList.add('block-items__stars', 'flex-item');

const linkVote = blockItemsStars.appendChild(a());
linkVote.setAttribute('href', '#');
linkVote.classList.add('link__vote', 'desktop-mobile-content');
linkVote.textContent = 'Please vote!';

const starsWrapper = blockItemsStars.appendChild(div());
starsWrapper.classList.add('stars-wrapper');

createStars();

const contentPointsMobile = starsWrapper.appendChild(h1());
contentPointsMobile.classList.add('content-points', 'mobile-content');
contentPointsMobile.textContent = '9.7';

const contentRate = blockItemsStars.appendChild(p());
contentRate.classList.add('content-rate');
contentRate.textContent = 'Rated by (3,904)';

createLine().classList.add('block-items__line', 'desktop-content');

// block-items__points

const blockItemsPoints = blockItems.appendChild(div());
blockItemsPoints.classList.add('block-items__points', 'flex-item', 'desktop-content');

const contentPoints = blockItemsPoints.appendChild(h1());
contentPoints.classList.add('content-points');
contentPoints.textContent = '9.9';

// block-items__btn-submit

const blockItemsBtn = blockItems.appendChild(div());
blockItemsBtn.classList.add('block-items__btn-submit', 'flex-item');

const btn = blockItemsBtn.appendChild(button());
btn.classList.add('btn');

const btnTxt = btn.appendChild(p());
btnTxt.classList.add('btn-txt');
btnTxt.textContent = 'Get Bonus';

const fireImg = btnTxt.appendChild(img());
// fireImg.setAttribute('src', './images/fire.png');
// fireImg.setAttribute('alt', 'fire');
setAttr(fireImg, './images/fire.png', 'fire')
fireImg.classList.add('img-fire', 'desktop-mobile-content');

const visitTxt = blockItemsBtn.appendChild(a());
visitTxt.setAttribute('href', '#');
visitTxt.classList.add('visit-txt', 'desktop-mobile-content');
visitTxt.textContent = 'Visit William Hill';

const arrowImg = visitTxt.appendChild(img());
// arrowImg.setAttribute('src', './images/arrow.png');
// arrowImg.setAttribute('alt', 'arrow');
setAttr(arrowImg, './images/arrow.png', 'arrow');

header.appendChild(block);

function createStars() {
    const fragment = document.createDocumentFragment();
    const stars = ['star1', 'star2', 'star3', 'star4', 'star5'];
    stars.forEach(star => {
        const item = fragment.appendChild(img());
        item.setAttribute('src', './images/star_active.png');
        item.setAttribute('alt', 'star');
        setAttr(item, './images/star_active.png', 'star')
    });
    return starsWrapper.appendChild(fragment);
};

function createLine() {
    const blockLine = blockItems.appendChild(div());
    const lineImg = blockLine.appendChild(img());
    // lineImg.setAttribute('src', './images/h_line.png');
    // lineImg.setAttribute('alt', 'line');
    setAttr(lineImg, './images/h_line.png', 'line')
    lineImg.classList.add('img-line');
    return blockLine;
};

function setAttr(el, value1, value2) {
    el.setAttribute('src', value1);
    el.setAttribute('alt', value2);
    return el;
};

