$(document).ready(function() {
    // Validasi saat form disubmit
    $("#registrationForm").submit(function(event) {
        event.preventDefault();
        
        // Reset semua pesan error
        $(".error-message").hide();
        
        // Flag untuk melacak validasi
        let isValid = true;
        
        // Validasi nama
        const nama = $("#nama").val().trim();
        if (nama === "") {
            $("#namaError").show();
            $("#nama").addClass("is-invalid");
            isValid = false;
        } else {
            $("#nama").addClass("is-valid").removeClass("is-invalid");
        }
        
        // Validasi email
        const email = $("#email").val().trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "" || !emailPattern.test(email)) {
            $("#emailError").show();
            $("#email").addClass("is-invalid");
            isValid = false;
        } else {
            $("#email").addClass("is-valid").removeClass("is-invalid");
        }
        
        // Validasi password
        const password = $("#password").val();
        if (password.length < 6) {
            $("#passwordError").show();
            $("#password").addClass("is-invalid");
            isValid = false;
        } else {
            $("#password").addClass("is-valid").removeClass("is-invalid");
        }
        
        // Validasi nomor telepon
        const telepon = $("#telepon").val().trim();
        const teleponPattern = /^[0-9]{10,13}$/;
        if (telepon === "" || !teleponPattern.test(telepon)) {
            $("#teleponError").show();
            $("#telepon").addClass("is-invalid");
            isValid = false;
        } else {
            $("#telepon").addClass("is-valid").removeClass("is-invalid");
        }
        
        // Jika semua validasi berhasil
        if (isValid) {
            // Di sini Anda bisa menambahkan kode untuk mengirim data form
            alert("Form berhasil disubmit!");
            $("#registrationForm")[0].reset();
            $(".is-valid").removeClass("is-valid");
        }
    });
    
    // Reset pesan error saat input diubah
    $("input").on("input", function() {
        const inputId = $(this).attr("id");
        $("#" + inputId + "Error").hide();
        $(this).removeClass("is-invalid");
    });
});