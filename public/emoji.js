document.querySelectorAll('.addInputBtn1').forEach(button => {
    button.addEventListener('change', function() {
        const placeholderText = `<img id="uploadedImage" alt="Your Image">`;
        socket.emit('chat message', placeholderText);
    });
});


document.querySelectorAll('.addInputBtn2').forEach(button => {
    button.addEventListener('click', function() {
        const placeholderText = `<img class="emoji_img" src="https://i.pinimg.com/736x/07/17/95/071795ba58e2cd600395cf8ecdaf10d1.jpg">`;
        socket.emit('chat message', placeholderText);
    });
});


document.querySelectorAll('.addInputBtn3').forEach(button => {
    button.addEventListener('click', function() {
        const placeholderText = `<img class="emoji_img" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUVFxUVFRUVFRUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQFy0lHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EADkQAAIBAgUCAwYEBQMFAAAAAAABAgMRBBIhMUEFUWFxgQYTIpGhwTJCsfAjUnLR4RQVYnOSosLx/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIhEBAQACAwEBAAIDAQAAAAAAAAECEQMSITFBBDIiUWET/9oADAMBAAIRAxEAPwD2wBAGCiCiAAAAADI5Me2RTYBGx0UNRJFDgPQoiFAFAAAgJJimb1jGe7i+4v8Apz1n9c6gksqepz9OKerf9/V9ihjsU5MgWI4Wvc48+XddWHHqN2nJcbLkXPm2+ZiVMYlo3ZduX5ktPFyeysv3uTMovq0MXbSN/Mq10lp+7v8AbJqNt3v+9RlbV9yqSJPVJfu4zFTea3H+CfDYd7922Q46n8St5COGU5vRPa3+S5KWiKsoF2kr7BsU+hSu7990WvcEeF3NFJDk2Vqph4uEsy9UdXg6qlFNM56pFNFnpNTJK3DNuPLXjHPHfroRRqHGzEAAgAogABC4lxbABAAC4KABcAAAS4NgDZMhkySREwB0USJDYD0UCgCFEAAAIgzkva6ray7nWs4b2zl/Gy9or63M+a6wrTim8nMuOZ2LqwOlkR4CF234mxCd9DgjtYFbp7X4bfUp1/eR1s3bsdfHDq4ssJF7pFdRtxtLqVS+sZfIuQxsn38jroYSNrWXyFfTYP8AKvRFzGp3GRgqumtx9VXkaH+3xiOjhx6pMvE0tL9v0HdPi1o/E0Z4W++paWFSWwdQzKUHGT00NGnG9rj5UtCSnAqTRCMdBinZk8SrilqO3Sa6ik7pEhXwD/hx8kWDqctIAoAAACARRAAAbcAAZi4AAACCgAMkMSHyEihg5IcIhQBQEFECgIKIgcF7T/Fiqi/ljBfON/ud4efY2rnxOIf/ADy/9qUfsY8/9W3D/ZVwtO0S3RQyEdCZI5NOpNGaSJqdRdynGo27aLxfPki3TjL/AIy+gbPSzBomiyqkuU4snSLxyKxKw0I0xZMvsnR457EN2QVJcNtvtsguRzFZkwUjPnUS/KvnqOp1lfR+j3X+CZn6Li0CvX1JoyuNcTTTNs9InekvC8X6F4yfZ96T/r+yNY3x+RzZfQAAUQAAAEAAAjQFAZkABQBAFGsAZIdEah4wUAARC4DWLcYKFxoXAHnB9QwrhiKq/mlmXkzssdjFSg5NN8JLlnG9V6zSrVINRlCesWpcpapqS0fOhz82WOutvrfhxy3uTw2MLDqjtFvsmyS10mVeor4Ld9Pmczocl1DH1ZSbgnZdkMwntFWotN3a2af27Ha4HpkIw1+pHisHh5Kzp3XfLf8AyPtJ+Dpb+m9F9qKVdqE/hctr7N9jpFS7HB4n2Xh+OhLR8Xdk+6fDN7oWOqL+HUu3w+9hbn4fv623AfkAq47EOKduE38g2rRcbiadJXnK338jiur+1yu1SV/FvL627FjqFCriJZU/hStr+9WLhfZ/D0rKfxS3tu36D3J9Tq345qp1qq3fW79dDd6N12UpKNReClz5Nm0unUl+VRv4f2KPVOlxjacFqtdB7lLrY6bDS0RZy6XKPSXmjF+BfxcrRNPxlfq90CFoN95P6aGoZPTcS1CKskreprI2xylnjDPGy+gAApAAAYGQAC4yFgAAMlgFAAaJIfYbJDBqQjHCSYyGYFIY2M1HoJ2NY1XHWERLgLYawDH9rpuOHlKLs4tffuchQiq0VNq0k+OWu3Y7rrOD9/RnT5ktPM866jOeHw8Y3cZKUk2tHued/LmuTd+aen/E1ePrPu3QUNhmJp3a8NSHotd1KMJy3d7va9m19jRpxvcUvm05Y6umP1zqDhkhH8UrJbWu3Yiq42lRqRpONWvUUHOdqqgopLM9ZTSbtrZd0WMd0n3k1LRuOq4aaad7+iKuP9l415qdRJO1pJqM4tqOVSV5aO36XKw1PpZzKzytSrXpKnDE0ZP3U1+bdbpqb7pq19fNoVRUkpx80xtLBx91Cgr5If8Ald3bfHOxfpUFCOWPOv0t9kZ5/dtcZrHV+rNKpmim9+Sh1XFOMdNW3bYt0EU8eldEhWqVlQhd2TfMuPF/25LUoUqFONSrmnKq0oQhJKU5NXvKd0krctpLRdgr4SFVXl+K1uNPJP5lfqeChiKcaU7fw3peKaa5jKD0adl8jTj1v0s5vH/H6qQr0MRSlOg6lOcH8UJyzLld2mtGR9MxPvabT37cWZHhuh+5puEc15JRbUVFKK4ir6b7+BY6dgsj+FWXb0KysRjLJ7Wt0NWWXsaGOWivsQYKGpR9raso+4y31q20/pKuWsNpww7Z6VcRi5zxNOlqopp2XPn3PQEc50zpalXVVr8MUvXU6Mr+NjZu39R/KzxvWT8hQADqcoAAAEEHCAQFIVMcpj0Z4o1SFuIBgFwAEaG2HiMYNyiqICpgRLDkgY24A6wmUFIdcRm5DkPbXpMamjVlPVNcSW/2+Z2JQ65RzUpWV3H4l9/pcy5se+FjXhz6ZyuM6JhHSoRpt3yuWvnJv7mhSkR0L5Xfvf0ETOOfI7L7bVxUkx8MJHsv1IKVQtxqj0DnTS7EEp6+Atasl58eBE4u2olaFFkXUaXJoYWEXyN6mouI+pdvxm4OqaEqMZLh/YxqMcuq01epp4aspK8XZ8rgn4f0yeDXCfzYlLD21LykRVLMcxKlwy1J8Vhoyyycczi7pdm9LhQplqkviVvU6Jj5phbq7XsPTyxtzz5koIDpk1HJfSijbgAOEuIFgIXEuOsFgCvKIzKyewWKCG7FzMlsGUAjzscpDsoZQAzC5hLC2AwAAAFxRBtSairt6CGhJDHO27sZON6q3pHRd+TIq4iT3ZjlzyNceG10uI6rThzd9kZGI9oJcWS+pi1ptlaRz58+V+N8OCT60cPis8mu+v7+ZJJWMihUyST8f/ps77EYexrrRiZJGpYSwNGnUbR1Zd939DMxdfEPRSsu8bX87NMZ1nGzhJKEMze93ZJenJH/ALjUa0opv/qW/wDUmyH60On9SlBWm7v+ZpJvzS0uJ1bqsmrQtmfL1S9OTm8V1LFt6YaFvNv66foGHr4xu6o04+eb7MPP9q/879aWHq11o3mvy7L6RSNHDTcba6lGOMrpWdODl/xzWX1IMPLESq/G0o/yqNvruFkKbdVTr3H0qazZuWrFPD7FuJeOKcq0aLNKMFlVtzKoMv05G08c2cWKdQkzFYfFmuNY5Ypri3I8oqRSEiFGiC0D7iCIA0DRQAYACiCMogoWAEACKriFHffsAnqUrVsdGPj5FDq/UJKDyRbtvbe3h3MrD4tTSkndMyz5NeRthxbm616vUpcaFGvi5S0bIKlTQghIwyztbTjkSTRDOBPcZIixSlOJFlLUokTjcXRfZXlAtYOrbR7ceBFKA6ER618Le2mojshm1K04K8eOOGXMPi1OKktmjTHKVN2rYigm7kMqKWppSlFjKlG4ricyZrm76RJ6MW90TKjYtUUKbVb4ZSw6XBDPDfFc0dORt0X12z7aQU6JPolqQUMVn1Ssruz767hON2Pc/Btcw07s06bMrD6F6EyozyW0KQwkSXKTpNTnwSlVMnhVTLlZ5YngKBSCAKIGwaKAAAAAAAogNgFfGV8i8XsZTk3qx+JqZ5N8ceRFYyyu66MMdQTehzc5e5rOO0Kl5Lwl+ZfVP1Z0M2YXtBh3OF4/ii80X4rjyauvUyzm434/q3OpdEdGRl9NxynBO/pz4rzLtOZiuzS85DbkUZhmNYz0dKIxyByByGEUkPihHEWzJBzRXo/w5P8Alk7+Te68ufmT3FlBNWfItGsJKwJtbMq0U46XuvqWFUNIzqRVH4EkZsiTHqRQSJX3IsXU0yx3enkhrnJ6LQdSpW13YUkmHpZYpIlURIE0EKQEiiWEhjYlxhbhMkUyiqhLTmMaXUxUQRmTxeg01LTq23LCZk18bGLtfXtu/kXcBWzLZ+uhUqM8PNrQWFAbIwBQKAALiXAFKOPr/lXr/YkxeJsrJq7+hmNEZ5a8aYY/pRsmKpW3EqsiNlStMzsXUVixipWMfF1xVpi5mpjP9PiXF/gqO67KfK9d/n3Nyjjk+Tk/ae07/R9nuUOndXbhq/iWj9DPq0uT0eOIXcd7+3Jyfs/LE4qqqdGN1f4pu+SC5cn38N2dj1v2cVKlm99N8PSKWo+ts8Z3LGXStRx8ZTyLVpX02S8S4mYfQ4RpxaW7bbfLd+WakahG/VaW76CKRDGoEphstJcwsWV1Md7wYWEx6K0KpKqg9lpOmSJkUZjrj2NJIksURwkSwKiakgTKJEiW5UQbIgrVUk2x1SZi9fvOhUjF2klmXnHVfoKrxi6sYizRxBxPSesKdOMr621NHD9YvJQis0nsl+r7LxJt006bdnSqLkgnip1XlpO0Vo5/aPd+JSpYGpUjac8qe8Y9u2Zmxh6SilGOiWxU3WdkgwuCjDbV8t6t+bLUXYYmxcxSLdr9OV0PIcNsTFue/TCGriYx0b9BQHldKwx7VRxvU7L4Fq+5Ur4p2vJ69gAxytdGOERRrXJoSXLABRdhnvYybS454+fJBKVnZigOFZq6ZXUqtkzmOo4tW3AC9HHMrD1MVWVGjFznJ+kVzKT4S7nrXSPYnA0aUISw9OpNJZpzjdyly9f0AB4Yz6w5crvTbpwp0o5acYwitoxSil6Ixuv1s9KcfC/yAA5LqJwnrg6OJs2aNDEsAOPJ24/FyNUV1AAjZ6NzoZ7wUCpU69J70lhiAAez0tU65PCp4gBeNTYnpyLEBANYzWIBOQAUTPxVaxyHtb1uFGjOTlrlaSW7b4AAklqt6m3m3s/1WvOUaNKnmlJ2ST/xoj2b2X6F/p4Xm1OrLWUlt/SvBAAuS+6HHbcXT0UyxGYATCqRSJEAGkZ1eoxskPACnPX/2Q==">`;
        socket.emit('chat message', placeholderText);
    });
});


document.querySelectorAll('.addInputBtn4').forEach(button => {
    button.addEventListener('click', function() {
        const placeholderText = `<h1>hello</h1>`;
        socket.emit('chat message', placeholderText);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var content = document.getElementById('content');

    toggleButton.addEventListener('click', function () {
        if (content.style.display === 'none') {
            content.style.display = 'block';
            toggleButton.textContent = 'Hide Content';
        } else {
            content.style.display = 'none';
            toggleButton.textContent = 'Show Content';
        }
    });
});
