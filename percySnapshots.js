module.exports = () => {
    const baseUrl = `http://localhost:8082`;
    return [
      {
        name: 'Localhost home page',
        url: `${baseUrl}`,
        waitForTimeout: 5000,
        waitForSelector: '#el1',
        execute: {
          beforeSnapshot() {
            document.querySelector('#el1').click();
            const wait = (ms) => {
              var start = new Date().getTime();
              var end = start;
              while (end < start + ms) {
                end = new Date().getTime();
              }
            };
            wait(3000);
          },
        },
      },
    ];
  };