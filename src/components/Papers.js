import { Container } from "react-bootstrap";

export const Papers = () => {
  const papers = [
    {
      title: "A Python Web Proxy Server",
      file: "/LuciaWebsite/papers/AWebProxyServer.pdf"
    },
    {
      title: "Cloud Encryption & Decryption in Python",
      file: "/LuciaWebsite/papers/SecuringTheCloud.pdf"
    },
    {
      title: "Algorithmic Opimisations for Large Datasets in Java",
      file: "/LuciaWebsite/papers/OptimisationAlgorithms.pdf"
    },
    {
      title: "A C++ Program for Identifying Abandoned or Removed Objects in Videos using OpenCV",
      file: "/LuciaWebsite/papers/AbandonedRemovedObjectClassification.pdf"
    }
  ];

  return (
    <section className="project" id="papers" style={{ backgroundColor: "rgb(77, 1, 61)" }}>
      <Container>
        <div className="text-center">

          <h2 style={{ marginTop: "40px" }}>College Papers</h2>

          <p style={{ width: "56%", margin: "14px auto 30px auto" }}>
            Some of my university reports and papers.
          </p>

          {/* SCROLLABLE LIST */}
          <div
            style={{
              maxHeight: "450px",
              overflowY: "auto",
              padding: "20px",
              background: "rgba(255, 255, 255, 0.08)",
              borderRadius: "12px",
              width: "75%",
              margin: "0 auto",
            }}
          >
            {papers.map((paper, index) => (
              <a
                key={index}
                href={paper.file}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "rgba(0, 0, 0, 0.25)",
                    padding: "18px 22px",
                    borderRadius: "10px",
                    marginBottom: "12px",
                    textAlign: "left",
                    transition: "0.3s ease",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "22px",
                      fontWeight: "600",
                      color: "#fff",
                    }}
                  >
                    {paper.title}
                  </h4>
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#ccc",
                      opacity: "0.85",
                    }}
                  >
                    Click to open PDF
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};
