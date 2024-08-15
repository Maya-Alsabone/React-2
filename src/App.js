function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.</p>
    </>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <AboutPage />
      <img className="avatar" src="path-to-your-image.jpg" alt="Avatar" />
    </div>
  );
}
