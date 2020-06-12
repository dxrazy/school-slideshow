let ClickCount = 0;
const documentlist = document.querySelector('ul');
const DocumentHead = document.querySelector('.Main-Heading');
const SlideHeader = document.querySelector('.slide-header');
document.addEventListener('click', changetext);

let slides = [
  {
    headerText: 'Do-goodings',
    backgroundColor: 'green',
    items: [
      'I have been able to get more work done on time',
      'I have started learning web scripting (as you can see here)',
      'I got better at blender',
      'I did a lot of fun stuff in class such as the house markup that I did for euclids, the animation I did for Visual communications, and the story that I made for creative writing',
      'and of course UE4, although I took a break from that to pursue other passions',
    ],
  },
  {
    headerText: 'Do-notgoodings',
    backgroundColor: 'red',
    items: [
      'I may have gotten better at managing my workload but I still am not the best',
      'I let other stuff make me stressed out (game design)',
      'Haven’t been the best at using my independent study time well',
      'Goddamn programming BS',
    ],
  },
  {
    headerText: 'Things I want to get done by the end of the',
    backgroundColor: 'white',
    items: [
      'Week: start learning C#',
      'Month: do more with my website',
      'Year: create an origional character with blender',
    ],
  },
  {
    headerText: 'Passion projects',
    backgroundColor: 'hot pink',
    items: [
      'Well there’s blender, programming (outside of games), and programming (inside of games). There was also room cleaning and pc building',
    ],
  },
];

function changetext() {
  DocumentHead.style.display = 'none';
  ShowSlide(slides[ClickCount % slides.length]);
  ClickCount = ClickCount + 1;
}

function ShowSlide(slide) {
  SlideHeader.textContent = slide.headerText;
  SlideHeader.style.background = slide.backgroundColor;
  documentlist.innerHTML = '';
  for ([index, text] of slide.items.entries()) {
    let li = document.createElement('p');
    li.textContent = text;
    documentlist.appendChild(li);
  }
}

function changetext_old() {
  DocumentHead.style.display = 'none';
  // the percent is modulo that means divide and get the remainder
  ClickCount = ClickCount + 1;
  if (ClickCount === 1) {
    let slide = {
      headerText: 'Do-goodings',
      backgroundColor: 'green',
      items: [
        'I have been able to get more work done on time',
        'I have started learning web scripting (as you can see here)',
        'I got better at blender',
        'I did a lot of fun stuff in class such as the house markup that I did for euclids, the animation I did for Visual communications, and the story that I made for creative writing',
        'and of course UE4, although I took a break from that to pursue other passions',
      ],
    };
    ShowSlide(slide);

    // SlideHeader.textContent = 'Do-goodings';
    // SlideHeader.style.background = 'green';
    // item1.textContent = 'I have been able to get more work done on time';
    // item2.textContent =
    //   'I have started learning web scripting (as you can see here)';
    // item3.textContent = 'I got better at blender';
    // item4.textContent =
    //   'I did a lot of fun stuff in class such as the house markup that I did for euclids, the animation I did for Visual communications, and the story that I made for creative writing';
    // item5.textContent =
    //   'and of course UE4, although I took a break from that to pursue other passions';
  }
  if (ClickCount === 2) {
    //SlideHeader.style.background = 'red';
    //SlideHeader.textContent = 'Do-notgoodings';
    //item1.textContent =
    // 'I may have gotten better at managing my workload but I still am not the best';
    //item2.textContent = 'I let other stuff make me stressed out (game design)';
    //item3.textContent =
    //'Haven’t been the best at using my independent study time well';
    //item4.textContent = 'Goddamn programming BS';
    //item5.textContent = '';
  }
  if (ClickCount === 3) {
    //SlideHeader.style.background = 'white';
    //SlideHeader.textContent = 'Things I want to get done by the end of the';
    //item1.textContent = 'Week: start learning C#';
    //item2.textContent = 'Month: do more with my website';
    //item3.textContent = 'Year: create an origional character with blender';
    //item4.textContent = '';
  }
  if (ClickCount === 4) {
    //SlideHeader.style.background = 'hot pink';
    //SlideHeader.textContent = 'Passion projects';
    //item1.textContent =
    //  'Well there’s blender, programming (outside of games), and programming (inside of games). There was also room cleaning and pc building';
    //item2.textContent = '';
    //item3.textContent = '';
  }
}
