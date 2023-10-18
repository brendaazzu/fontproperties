/*                 window.onload = async function() {
                    console.log("Página carregada");
          
                    var elements = [
                        {id: 'title', text: 'Important CSS Properties'},
                        {id: 'color', text: 'Color'},
                        {id: 'size', text: 'Font Size'},
                        {id: 'weight', text: 'Font Weight'},
                        {id: 'family', text: 'Font Family'},
                        {id: 'align', text: 'Text Align'},
                    ];
          
                    function typeWriter(element, text) {
                        return new Promise(resolve => {
                            var i = 0;
                            function typing() {
                                if (i < text.length) {
                                    element.innerHTML += text.charAt(i);
                                    i++;
                                    setTimeout(typing, 150);
                                } else {
                                    resolve();
                                }
                            }
                            typing();
                        });
                    }
          
                    for (let el of elements) {
                        var element = document.getElementById(el.id);
                        if (element) {
                            await typeWriter(element, el.text);
                        } else {
                            console.log(`Element with ID '${el.id}' not found.`);
                        }
                    }
                } */