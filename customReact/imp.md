<div id="root"></div>

<script>
  // 1️⃣ Correct way to select element by id
  const mainContainer = document.getElementById('root'); // 'B' must be uppercase

  // 2️⃣ Create a button
  const link = document.createElement('button');
  link.textContent = "Click Me";

  // 3️⃣ Add click event (spelling of addEventListener fixed)
  link.addEventListener('click', () => {
    window.open('https://youtube.com', '_blank');
  });

  // 4️⃣ Append button to the container
  mainContainer.appendChild(link);
</script>



<div id="root"></div>

<script>
  const mainContainer = document.getElementById('root');

  // create <a> element
  const link = document.createElement('a');
  link.textContent = 'Click me to visit Google';
  link.setAttribute('href', 'https://google.com');
  link.setAttribute('target', '_blank');

  // attach it to #root
  mainContainer.appendChild(link);
</script>



<!--  -->

<div id="root"></div>

<script>
  // 1️⃣ Blueprint object
  const myLink = {
    type: 'a',
    props: { href: 'https://example.com', target: '_blank' },
    children: 'Go to Example'
  };

  // 2️⃣ Select container
  const container = document.getElementById('root');

  // 3️⃣ Create element
  const domElement = document.createElement(myLink.type);

  // 4️⃣ Add children text
  domElement.innerHTML = myLink.children;

  // 5️⃣ Set attributes
  setAttribute(name, value) → Adds the attribute to the element:

href="https://google.com"

target="_blank"
  domElement.setAttribute('href', myLink.props.href);
  domElement.setAttribute('target', myLink.props.target);

  // 6️⃣ Append to container → shows on page
  container.appendChild(domElement);
</script>

Step 3.5 — Appending the element to the container

Your code line:

container.appendChild(domElement);

🧩 What this does:

container → The DOM element where you want to show your new element (e.g., #root)

appendChild() → Puts the element inside the container, making it visible on the page.
