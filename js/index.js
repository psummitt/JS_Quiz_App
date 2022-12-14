const quizData = [{
    question: 'What GCP service is Google’s platform-as-a-service offering?',
    a: 'Compute Engine',
    b: 'Cloud Spanner',
    c: 'App Engine',
    d: 'Kubernetes Engine',
    correct: 'c'
}, {
    question: 'What GCP storage service would you use to store unstructured data?',
    a: 'Cloud Storage',
    b: 'DataProc',
    c: 'DataStore',
    d: 'BigQuery',
    correct: 'a'
}, {
    question: 'What GCP service provides managed analytic and data warehousing services?',
    a: 'Cloud Spanner',
    b: 'Cloud SQL',
    c: 'BigQuery',
    d: 'Cloud DataFlow',
    correct: 'c'
}, {
    question: 'Which of the following is not possible using Security Command Center?',
    a: 'Gather usage metrics regarding the resources in your Google Cloud environment.',
    b: 'Identify potential botnet activity on your network.',
    c: 'Uncover common vulnerabilities such as SQL injection attacks.',
    d: 'Get a full list of assets in your Google Cloud environment.',
    correct: 'a'
}, {
    question: 'Which of the following is the best option to enable if you want to define alerts on your resources if a health check fails?',
    a: 'Cloud Trace',
    b: 'Cloud Debugger',
    c: 'Cloud Monitoring',
    d: 'Cloud Functions',
    correct: 'c'
}, {
    question: 'Which of the following types of resources can a Service Account Role be applied to?',
    a: 'Virtual Machine',
    b: 'Google Group',
    c: 'Folder',
    d: 'User',
    correct: 'a'
}, {
    question: 'What is the best way to organize projects that need to share the same policy?',
    a: 'Place the policy on the organization so it will apply to the projects simultaneously.',
    b: 'Consolidate the resources into one project and apply the policy to the single project.',
    c: 'Place each project in an individual folder and apple the same policy on each folder.',
    d: 'Place both projects into a folder and apply the policy on the folder.',
    correct: 'd'
}, {
    question: 'Which of the following provides access control to Google Cloud Resources?',
    a: 'Permissions',
    b: 'Roles',
    c: 'Firewall Rules',
    d: 'Policies',
    correct: 'd'
}, {
    question: 'You are onboarding a new engineer who will be in charge of compute engine resources. Which of the following roles should you grant this user?',
    a: 'Compute Editor',
    b: 'Build a custom role for this user',
    c: 'Compute Admin Role',
    d: 'Owner',
    correct: 'c'
}, {
    question: 'Which of the following services is the customer responsible for configuring, administering, and monitoring?',
    a: 'Google App Engine',
    b: 'Google Cloud Suite',
    c: 'G Suite',
    d: 'Google Compute Engine',
    correct: 'd'
}
];

const quiz = document.getElementById("quiz");
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById("submit");
const answerE1s = document.querySelectorAll('answer');

let currentQuiz = 0;
let answer = undefined;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuestion];

    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    currentQuestion++;
    }

function getSelected() {

    let answer = undefined;

    answerE1s.forEach((answerE1) => {
        if(answerE1.checked) {
            answer = answerE1.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerE1s.forEach((answerE1) => {
        answerE1.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz], correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quizData.innerHTML = '<h2>You answered ${score}/${quizData.length} questions correctly.</h2> <button onclick="location.reload">Reload</button>';
        }
    }
});eload