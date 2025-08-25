function generateCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('landscape', 'pt', 'a4'); // Landscape

    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();

    // Background color
    doc.setFillColor(240, 248, 255); // Light blue
    doc.rect(0, 0, width, height, 'F');

    // Border
    doc.setDrawColor(40, 62, 80);
    doc.setLineWidth(4);
    doc.rect(20, 20, width - 40, height - 40);

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(36);
    doc.setTextColor(40, 62, 80);
    doc.text("Certificate of Completion", width / 2, 120, { align: "center" });

    // Subtitle
    doc.setFont("helvetica", "normal");
    doc.setFontSize(18);
    doc.setTextColor(80, 80, 80);
    doc.text("This certifies that", width / 2, 160, { align: "center" });

    // User Name
    doc.setFont("helvetica", "bolditalic");
    doc.setFontSize(28);
    doc.setTextColor(30, 144, 255); // Dodger blue
    doc.text(userName, width / 2, 200, { align: "center" });

    // Course Name
    doc.setFont("helvetica", "normal");
    doc.setFontSize(20);
    doc.setTextColor(40, 62, 80);
    doc.text("has successfully completed the", width / 2, 230, { align: "center" });

    doc.setFont("helvetica", "bolditalic");
    doc.setFontSize(24);
    doc.setTextColor(30, 144, 255);
    doc.text("Phishing Awareness Training", width / 2, 260, { align: "center" });

    // Score
    doc.setFont("helvetica", "normal");
    doc.setFontSize(18);
    doc.setTextColor(80, 80, 80);
    doc.text(`Score: ${quizScore} / 12`, width / 2, 300, { align: "center" });

    // Decorative line
    doc.setDrawColor(30, 144, 255);
    doc.setLineWidth(2);
    doc.line(width / 4, 320, (width / 4) * 3, 320);

    // Signature
    doc.setFontSize(14);
    doc.text("Signed: KKM Cybersecurity", width - 200, height - 60);

    // Save PDF
    doc.save(`${userName}_Certificate.pdf`);
}




