
// Function for changing images on the Home page (from earlier)
function changeImage() {
    const imgElement = document.getElementById('mainImage');
    const photo1 = "images/old photo marrakech.jpg";
    const photo2 = "images/Jemaa-el-Fna (1).jpg";

    if (imgElement.src.includes("old%20photo%20marrakech") || imgElement.src.includes("old photo marrakech")) {
        imgElement.src = photo2;
    } else {
        imgElement.src = photo1;
    }
}

// Function to handle form submission on the Contact page
function submitForm(event) {
    // يمنع الصفحة من إعادة التحميل
    event.preventDefault(); 
    
    // الحصول على اسم المستخدم من الخانة
    const userName = document.getElementById('name').value;
    
    // إظهار رسالة تفاعلية
    alert("Thank you, " + userName + "! Your message about Marrakech has been received successfully.");
    
    // مسح المعلومات من الفورم بعد الإرسال
    document.getElementById('contactForm').reset();
}