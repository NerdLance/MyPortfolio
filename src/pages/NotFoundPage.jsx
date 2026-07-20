import PageMetadata from "../components/PageMetadata";

const NotFoundPage = () => {
  return (
    <main className="min-vh-100 d-flex align-items-center justify-content-center p-4">
      <PageMetadata
        title="Page Not Found | Lance Madden"
        description="The requested page could not be found."
      />
      <h1 className="display-4 text-center">Page not found.</h1>
    </main>
  );
};

export default NotFoundPage;
