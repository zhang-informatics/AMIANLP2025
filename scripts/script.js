const guests = {
  guest1: {
    name: 'Rui Zhang, PhD, FACMI, FAMIA, FIAHSI',
    occupation: 'Chair',
    description: 'Professor and Founding Chief, Division of Computational Health Sciences, Medical School, University of Minnesota, Minneapolis, MN',
    picture: 'src/rui.png',
    homepage: 'https://amia.org/membership/rui-zhang-phd-famia-facmi',
  },
  guest2: {
    name: 'Sunyang Fu, PhD, MHI',
    occupation: 'Vice Chair',
    description: 'Assistant Professor, University of Texas Health Science Center at Houston, TX',
    picture: 'src/sunyang2.jpg',
    homepage: 'https://amia.org/membership/sunyang-fu-phd-mhi',
  },
  guest3: {
    name: 'Yanshan Wang, PhD',
    occupation: 'Past Chair',
    description: 'Assistant Professor and Vice-Chair of Health Informatics Research, University of Pittsburgh, PA',
    picture: 'src/naoshi.png',
    homepage: 'https://amia.org/membership/yanshan-wang-phd',
  },
  guest4: {
    name: 'Sujani Kakumanu, MD',
    occupation: 'Member-at-Large',
    description: 'Clinical Associate Professor, Allergy & Immunology, William S. Middleton Veterans Hospital, University of Wisconsin, Madison, WI',
    picture: 'src/sujani.png',
    homepage: 'https://amia.org/membership/sujani-kakumanu-md',
  },
  guest5: {
    name: 'Jiyeong Kim, PhD',
    occupation: 'Member-at-Large',
    description: 'Post doctoral scholar, Stanford University, CA',
    picture: 'src/jiyeong.png',
    homepage: 'https://profiles.stanford.edu/jiyeong-kim',
  },
  guest6: {
    name: 'Xinsong Du, PhD',
    occupation: 'Secretary',
    description: 'Postdoctoral Research Fellow, Harvard Medical School, Boston, MA',
    picture: 'src/xinsong.png',
    homepage: 'https://amia.org/membership/xinsong-du-phd',
  },
};

// Leadership members (same as guests for now)
const leadership = {
  leader1: {
    name: 'Rui Zhang, PhD, FACMI, FAMIA, FIAHSI',
    occupation: 'Chair',
    description: 'Professor and Founding Chief, Division of Computational Health Sciences, Medical School, University of Minnesota, Minneapolis, MN',
    picture: 'src/rui.png',
    homepage: 'https://amia.org/membership/rui-zhang-phd-famia-facmi',
  },
  leader2: {
    name: 'Sunyang Fu, PhD, MHI',
    occupation: 'Vice Chair',
    description: 'Associate Professor, University of Texas Health Science Center at Houston, TX',
    picture: 'src/sunyang2.jpg',
    homepage: 'https://amia.org/membership/sunyang-fu-phd-mhi',
  },
  leader3: {
    name: 'Yanshan Wang, PhD',
    occupation: 'Past Chair',
    description: 'Assistant Professor and Vice-Chair of Health Informatics Research, University of Pittsburgh, PA',
    picture: 'src/naoshi.png',
    homepage: 'https://amia.org/membership/yanshan-wang-phd',
  },
  leader4: {
    name: 'Sujani Kakumanu, MD',
    occupation: 'Member-at-Large',
    description: 'Clinical Associate Professor, Allergy & Immunology, William S. Middleton Veterans Hospital, University of Wisconsin, Madison, WI',
    picture: 'src/sujani.png',
    homepage: 'https://amia.org/membership/sujani-kakumanu-md',
  },
  leader5: {
    name: 'Jiyeong Kim, PhD',
    occupation: 'Member-at-Large',
    description: 'Post doctoral scholar, Stanford University, CA',
    picture: 'src/jiyeong.png',
    homepage: 'https://profiles.stanford.edu/jiyeong-kim',
  },
  leader6: {
    name: 'Xinsong Du, PhD',
    occupation: 'Secretary',
    description: 'Postdoctoral Research Fellow, Harvard Medical School, Boston, MA',
    picture: 'src/xinsong.png',
    homepage: 'https://amia.org/membership/xinsong-du-phd',
  },
};

function createGuest(guest) {
  // Organization section now uses simple static HTML list
  // This function is no longer used for Organization section
  return;
}

function createLeader(leader) {
  const leaderContainer = document.getElementById('leadership-container');
  const leaderElement = document.createElement('li');
  
  // Common image styles for consistent sizing
  const imageStyles = "width: 200px; height: 200px; object-fit: cover; cursor: pointer;";
  
  // Create image with optional link
  const imageHTML = leader.homepage ? 
    `<a href="${leader.homepage}" target="_blank" rel="noopener noreferrer">
       <img src="${leader.picture}" alt="Leader picture" style="${imageStyles}">
     </a>` : 
    `<img src="${leader.picture}" alt="Leader picture" style="${imageStyles}">`;
  
  leaderElement.innerHTML = `<div class="guest-image">
                                    ${imageHTML}
                                </div>
                                <div class="guest-info">
                                    <h3>${leader.name}</h3>
                                    <h4>${leader.occupation}</h4>
                                    <hr>
                                    <p>${leader.description}</p>
                                </div>`;
  leaderContainer.appendChild(leaderElement);
}

function createGuestSection(guestsList, counter) {
  // Organization section now uses simple static HTML list
  // This function is no longer used for Organization section
  return;
}

function createLeader(leader) {
  const leaderContainer = document.getElementById('leadership-container');
  const leaderElement = document.createElement('li');
  
  // Common image styles for consistent sizing
  const imageStyles = "width: 200px; height: 200px; object-fit: cover; cursor: pointer;";
  
  // Create image with optional link
  const imageHTML = leader.homepage ? 
    `<a href="${leader.homepage}" target="_blank" rel="noopener noreferrer">
       <img src="${leader.picture}" alt="Leader picture" style="${imageStyles}">
     </a>` : 
    `<img src="${leader.picture}" alt="Leader picture" style="${imageStyles}">`;
  
  leaderElement.innerHTML = `<div class="guest-image">
                                    ${imageHTML}
                                </div>
                                <div class="guest-info">
                                    <h3>${leader.name}</h3>
                                    <h4>${leader.occupation}</h4>
                                    <hr>
                                    <p>${leader.description}</p>
                                </div>`;
  leaderContainer.appendChild(leaderElement);
}

function createGuestSection(guestsList, counter) {
  const guestContainer = document.getElementById('guest-container');
  guestContainer.innerHTML = '';
  for (let i = 0; i < counter; i += 1) {
    createGuest(guestsList[i]);
  }
}

function createLeadershipSection(leadersList, counter) {
  const leaderContainer = document.getElementById('leadership-container');
  leaderContainer.innerHTML = '';
  for (let i = 0; i < counter; i += 1) {
    createLeader(leadersList[i]);
  }
}

let leadershipClicks = true;
const leadershipButton = document.getElementById('leadership-more-button');
const mediaQuery = window.matchMedia('(min-width: 768px)');
const leadershipList = Object.values(leadership);

function mediaQueryCheck() {
  if (mediaQuery.matches) {
    createLeadershipSection(leadershipList, leadershipList.length);
    if (leadershipButton) leadershipButton.style.display = 'none';
  } else {
    createLeadershipSection(leadershipList, 2);
    if (leadershipButton) leadershipButton.style.display = 'block';
  }
}

mediaQuery.addEventListener('change', () => {
  mediaQueryCheck();
  document.querySelector('.mobile-menu').style.display = 'none';
});

function addSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  mediaQueryCheck();
  addSmoothScrolling();
});

// Leadership button event listener
if (leadershipButton) {
  leadershipButton.addEventListener('click', () => {
    if (leadershipClicks) {
      createLeadershipSection(leadershipList, leadershipList.length);
      leadershipClicks = false;
      leadershipButton.innerHTML = `LESS
                              <img src="src/up-arrow.png" alt="Arrow">`;
    } else {
      createLeadershipSection(leadershipList, 2);
      leadershipClicks = true;
      document.getElementById('leadership-id').scrollIntoView({ behavior: 'smooth' });
      leadershipButton.innerHTML = `MORE
                              <img src="src/down-arrow.png" alt="Arrow">`;
    }
  });
}

function openCloseMenu() {
  const x = document.querySelector('.mobile-menu');
  const y = document.querySelector('body');
  if (x.style.display === 'flex') {
    x.style.display = 'none';
    y.style.overflow = 'scroll';
  } else {
    x.style.display = 'flex';
    y.style.overflow = 'hidden';
  }
}

function addevent(id) {
  document.getElementById(id).addEventListener('click', () => {
    openCloseMenu();
  });
}

const ids = ['onclick-open', 'onclick-close', 'onclick-events', 'onclick-about', 'onclick-sponsors', 'onclick-leadership', 'onclick-past-events', 'onclick-contact', 'onclick-compaign', 'onclick-program'];
ids.forEach(addevent);