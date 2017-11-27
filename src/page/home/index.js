function getSyncTime() {
    return new Promise((resolve, reject) => {
        try {
            let startTime = new Date().getTime();

            setTimeout(() => {
                let endTime = new Date().getTime();
                let data = endTime - startTime;

                resolve(data);
            }, 1000)
        } catch (err) {
            reject(err);
        }
    });
}

async function getSyncData() {
    const time = await getSyncTime();
    const data = `endTime - startTime = ${time}`;

    return data;
}

async function getData() {
    const data = await getSyncData();
    console.log(data);
}

getData();