/*Requirements Script*/
const { MessageMedia, Client  } = require('whatsapp-web.js');

const client = new Client();
/*Client QR Code*/
client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
});
/*Client Status*/
client.on('ready', () => {
    console.log('The script has run, if there is a problem, try again and start over');
});

client.on('message', async msg => {
    const d = new Date();
    const Tahun = d.getFullYear();
    const Bulan = d.getMonth() + 1;
    /*oh yes, I forgot if this script is in Indonesian*/
    const Month = ["Desmber", "Januari", "Febuari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November"];
    const Day = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const Hari = d.getDate();
    const Jam = d.getHours();
    const Menit = d.getMinutes();
    const Detik = d.getSeconds();
    const contact = await msg.getContact();

    const Time = "Tahun : " + Tahun + ", Bulan : " + Month[Bulan] + ", Hari : " + Day[d.getDay()] + ", Jam : " + Jam + ", Menit : " + Menit + ", Detik : " + Detik ;
    /* Massages */
    /* Pesan */
    if (msg.body === 'halo') {
        const contact = await msg.getContact();
        msg.reply(`Hi @${contact.number}, Apa Kabar ?`);
        console.log(`[ ` + Time + ` User Script Massage ] : ` + contact.number + ` : `+ msg.body);
    } else if (msg.body === 'apakabar') {
        msg.reply('Baik');
        console.log(`[ ` + Time + ` User Script Massage ] : ` + contact.number + ` : `+ msg.body);
    } else if (msg.body === '!menu') {
        const contact = await msg.getContact();
        msg.reply(`*Hii ` + contact.number + 
                  `*\nTanggal ` + Day[d.getDay()] +`, `+ Hari + `, ` + Month[Bulan] + `, ` + Tahun +
                  `\n\n- halo `+
                  `\n» apakabar `+
                  `\n» !berita` +
                  `\n» !tanggal `+
                  `\n» !info `+
                  `\n» !waktu `+
                  `\n» !gambar `+
                  `\n» !everyone ( Feature Disable By Owner ) `+
                  `\n\nsimple bot`);
        console.log(`[ ` + Time + ` User Script Massage ] : ` + contact.number + ` : `+ msg.body);
    } else if (msg.body === '!tanggal') {
        msg.reply(`Sekarang Tanggal` + Hari + Day[d.getDay()] +`, Bulan ` + Mount[Bulan] + `, Tahun` + Tahun);
        console.log(`[ ` + Time + ` User Script Massage ] : ` + contact.number + ` : `+ msg.body);
    } else if (msg.body === '!waktu') {
        msg.reply(`Jam : ` + Jam + `, Menit : ` + Menit + `, Detik : ` + Detik);
        console.log(`[ ` + Time + ` User Script Massage ] : ` + contact.number + ` : `+ msg.body);
    } else if (msg.body === '!info') {
        let info = client.info;
        msg.reply(`*info*\n User name: ${info.pushname} \n My number: ${info.wid.user}`);
    } else if (msg.body === '!gambar') {
        const { MessageMedia } = require('whatsapp-web.js');
        const Image = await MessageMedia.fromUrl('https://i.ytimg.com/vi/6cN3vC2tGuY/hqdefault.jpg');
        msg.reply(Image);
    } else if(msg.body === '!everyone') {
        const chat = await msg.getChat();
            
        let text = "";
        let mentions = [];
    
        for(let participant of chat.participants) {
             const contact = await client.getContactById(participant.id._serialized);
                
             mentions.push(contact);
             text += `@${participant.id.user} `;
        }

        await chat.sendMessage(`Sempai ><! ` + text, { mentions });
    } else {
        /*jika pesan diatas tidak ada yang sesuai, maka js akan mengirimkan ke console*/
        /*if the message above does not match, then js will send it to the console*/
        console.log(`[ ` + Time + ` User Others Massage ] : ` + contact.number + ` : ` + msg.body);
    }
});

client.initialize();
