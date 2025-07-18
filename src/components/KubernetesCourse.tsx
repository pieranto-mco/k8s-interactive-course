import { Card, CardContent } from "./ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Button } from "./ui/buttons";

import React, { useState } from "react";

const modules = [
  {
    id: "modulo1",
    title: "Modulo 1 – Fondamenti di Kubernetes",
    theory: (
      <>
        <p>Cos'è Kubernetes e a cosa serve</p>
        <p>Componenti principali: Pod, ReplicaSet, Deployment, Namespace</p>
        <p>
          Approfondisci sul sito ufficiale:{" "}
          <a
            href="https://kubernetes.io/it/docs/concepts/overview/what-is-kubernetes/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            https://kubernetes.io/it/docs/concepts/overview/what-is-kubernetes/
          </a>
        </p>
      </>
    ),
    lab: (
      <>
        <p>Prova a eseguire questi comandi su Minikube o un cluster locale:</p>
        <pre className="bg-gray-100 p-3 rounded">
          {`kubectl create deployment web --image=nginx
kubectl expose deployment web --port=80 --type=NodePort
kubectl get all`}
        </pre>
        <p>
          Guida passo passo:{" "}
          <a
            href="https://kubernetes.io/docs/tutorials/stateless-application/hello-minikube/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            Hello Minikube Tutorial
          </a>
        </p>
      </>
    ),
    quiz: [
      {
        question: "Qual è il componente minimo eseguibile in Kubernetes?",
        options: ["Node", "Pod", "Deployment", "Service"],
        answer: "Pod",
      },
      {
        question: "A cosa serve un Deployment?",
        options: [
          "A esporre una porta",
          "A gestire la replica e il rollout dei Pod",
          "A configurare la rete",
          "A creare namespace",
        ],
        answer: "A gestire la replica e il rollout dei Pod",
      },
      {
        question: "Un Namespace in Kubernetes:",
        options: [
          "Isola il traffico di rete",
          "È un contenitore logico per le risorse",
          "Serve per accedere da Internet",
          "Gestisce la replica",
        ],
        answer: "È un contenitore logico per le risorse",
      },
    ],
  },

  {
    id: "modulo2",
    title: "Modulo 2 – Pod Networking & DNS",
    theory: (
      <>
        <p>Comunicazione tra Pod</p>
        <p>DNS interno e CoreDNS</p>
        <p>kube-proxy, NAT, iptables</p>
        <p>
          Documentazione CoreDNS:{" "}
          <a
            href="https://coredns.io/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            https://coredns.io/
          </a>
        </p>
      </>
    ),
    lab: (
      <>
        <p>Esegui per testare la comunicazione DNS e tra namespace:</p>
        <pre className="bg-gray-100 p-3 rounded">
          {`kubectl create ns a && kubectl run pod-a --image=busybox -n a -- sleep 3600
kubectl create ns b && kubectl run pod-b --image=busybox -n b -- sleep 3600
kubectl exec -n a pod-a -- nslookup pod-b.b.svc.cluster.local`}
        </pre>
        <p>
          Guida rete Kubernetes:{" "}
          <a
            href="https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            DNS e Networking
          </a>
        </p>
      </>
    ),
    quiz: [
      {
        question: "Chi gestisce il DNS?",
        options: ["systemd-resolved", "CoreDNS", "kube-dns", "dnsmasq"],
        answer: "CoreDNS",
      },
      {
        question: "I Pod comunicano via?",
        options: ["MAC", "Hostname", "IP interni", "Cluster name"],
        answer: "IP interni",
      },
      {
        question: "kube-proxy serve per?",
        options: ["DNS lookup", "Log centralizzati", "Load balancing dei Service", "Cancellazione Pod"],
        answer: "Load balancing dei Service",
      },
    ],
  },

  {
    id: "modulo3",
    title: "Modulo 3 – Services",
    theory: (
      <>
        <p>ClusterIP, NodePort, LoadBalancer</p>
        <p>Endpoints, selettori, Headless Service</p>
        <p>
          Approfondimenti Services Kubernetes:{" "}
          <a
            href="https://kubernetes.io/docs/concepts/services-networking/service/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            Documentazione ufficiale
          </a>
        </p>
      </>
    ),
    lab: (
      <>
        <p>Prova a esporre un deployment e accedi tramite un pod client:</p>
        <pre className="bg-gray-100 p-3 rounded">
          {`kubectl expose deployment web --port=80 --type=ClusterIP
kubectl run client --image=busybox -- sleep 3600
kubectl exec -it client -- wget -qO- http://web`}
        </pre>
        <p>
          Guida ai tipi di Service:{" "}
          <a
            href="https://medium.com/@craigroth/types-of-kubernetes-services-and-when-to-use-them-c12f9f403d8a"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            Tipi di Kubernetes Service (Medium)
          </a>
        </p>
      </>
    ),
    quiz: [
      {
        question: "ClusterIP è accessibile?",
        options: ["Da Internet", "Solo internamente", "Da DNS esterno", "Da Helm"],
        answer: "Solo internamente",
      },
      {
        question: "Il Service seleziona Pod via?",
        options: ["Nome", "Label", "UID", "IP"],
        answer: "Label",
      },
      {
        question: "Headless Service?",
        options: ["Espone tutti i Node", "Accede ai Pod direttamente", "Usa Load Balancer", "Serve il DNS esterno"],
        answer: "Accede ai Pod direttamente",
      },
    ],
  },

  {
    id: "modulo4",
    title: "Modulo 4 – Ingress & Load Balancing",
    theory: (
      <>
        <p>Differenza Ingress vs LoadBalancer</p>
        <p>NGINX Ingress Controller</p>
        <p>Routing su path/host</p>
        <p>
          NGINX Ingress docs:{" "}
          <a
            href="https://kubernetes.github.io/ingress-nginx/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            https://kubernetes.github.io/ingress-nginx/
          </a>
        </p>
      </>
    ),
    lab: (
      <>
        <p>Applica Ingress controller e regole di routing:</p>
        <pre className="bg-gray-100 p-3 rounded">
          {`kubectl apply -f ingress-controller.yaml
kubectl apply -f ingress-rules.yaml
curl http://localhost/api`}
        </pre>
        <p>
          Guida Ingress Kubernetes:{" "}
          <a
            href="https://kubernetes.io/docs/concepts/services-networking/ingress/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            https://kubernetes.io/docs/concepts/services-networking/ingress/
          </a>
        </p>
      </>
    ),
    quiz: [
      {
        question: "Ingress espone cosa?",
        options: ["Log", "Route HTTP", "Pods", "Node"],
        answer: "Route HTTP",
      },
      {
        question: "LoadBalancer è gestito da?",
        options: ["DNS", "Cloud provider", "Kubelet", "Helm"],
        answer: "Cloud provider",
      },
      {
        question: "Ingress può gestire?",
        options: ["Replica", "Namespace", "Path-based routing", "PVC"],
        answer: "Path-based routing",
      },
    ],
  },

  {
    id: "modulo5",
    title: "Modulo 5 – Network Policies",
    theory: (
      <>
        <p>Sicurezza tra Pod</p>
        <p>CNI plugin (Calico, Cilium)</p>
        <p>Regole per namespace, label, port</p>
        <p>
          Calico Network Policy:{" "}
          <a
            href="https://docs.projectcalico.org/security/network-policy"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            https://docs.projectcalico.org/security/network-policy
          </a>
        </p>
      </>
    ),
    lab: (
      <>
        <p>Applica regole di sicurezza di esempio:</p>
        <pre className="bg-gray-100 p-3 rounded">
          {`kubectl apply -f deny-all.yaml
kubectl apply -f allow-frontend.yaml`}
        </pre>
      </>
    ),
    quiz: [
      {
        question: "Network Policy serve per?",
        options: ["Log", "Limitare traffico", "Scalare pod", "DNS"],
        answer: "Limitare traffico",
      },
      {
        question: "Si basa su?",
        options: ["UID", "Label selector", "Pod name", "ResourceQuota"],
        answer: "Label selector",
      },
      {
        question: "Plugin per le policy?",
        options: ["Calico", "Fluentd", "Envoy", "Dex"],
        answer: "Calico",
      },
    ],
  },

  {
    id: "modulo6",
    title: "Modulo 6 – Debug e simulazione reale",
    theory: (
      <>
        <p>Port forwarding, kubectl logs, describe</p>
        <p>Helm, Service Mesh (Istio, Linkerd)</p>
        <p>
          Helm docs:{" "}
          <a
            href="https://helm.sh/docs/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            https://helm.sh/docs/
          </a>
        </p>
      </>
    ),
    lab: (
      <>
        <p>Comandi utili per debug:</p>
        <pre className="bg-gray-100 p-3 rounded">
          {`kubectl port-forward svc/web 8080:80
kubectl logs <pod>
kubectl describe pod <pod>`}
        </pre>
      </>
    ),
    quiz: [
      {
        question: "kubectl logs fa cosa?",
        options: ["Mostra log", "Cambia label", "Espone pod", "Crea job"],
        answer: "Mostra log",
      },
      {
        question: "describe serve a?",
        options: ["Eliminare risorse", "Dettagli risorsa", "Creare configmap", "Debugging Helm"],
        answer: "Dettagli risorsa",
      },
      {
        question: "Helm è?",
        options: ["Log viewer", "Package manager Kubernetes", "CNI plugin", "Storage provisioner"],
        answer: "Package manager Kubernetes",
      },
    ],
  },
];


function Quiz({ quiz }) {
  const [selected, setSelected] = useState(Array(quiz.length).fill(null));
  const [showAnswer, setShowAnswer] = useState(Array(quiz.length).fill(false));

  function selectAnswer(qIdx, option) {
    const newSelected = [...selected];
    newSelected[qIdx] = option;
    setSelected(newSelected);

    const newShow = [...showAnswer];
    newShow[qIdx] = true;
    setShowAnswer(newShow);
  }

  return (
    <div>
      {quiz.map((q, i) => (
        <div key={i} className="mb-6 p-4 border rounded">
          <p className="font-semibold mb-2">{q.question}</p>
          <div className="flex flex-col gap-2">
            {q.options.map((opt, j) => {
              const isSelected = selected[i] === opt;
              const isCorrect = q.answer === opt;
              const show = showAnswer[i];

              let bg = "bg-gray-200 hover:bg-gray-300 cursor-pointer";
              if (show && isSelected && isCorrect) bg = "bg-green-400 text-white";
              else if (show && isSelected && !isCorrect) bg = "bg-red-400 text-white";
              else if (show && isCorrect) bg = "bg-green-200";

              return (
                <button
                  key={j}
                  className={`rounded px-3 py-2 text-left ${bg}`}
                  onClick={() => selectAnswer(i, opt)}
                  disabled={show}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {showAnswer[i] && (
            <p className="mt-2">
              {selected[i] === q.answer
                ? "✅ Risposta corretta!"
                : `❌ Risposta errata. La risposta giusta è: ${q.answer}`}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function KubernetesCourse() {
  const [activeModule, setActiveModule] = useState(modules[0].id);

  const currentModule = modules.find((m) => m.id === activeModule);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Corso interattivo Kubernetes</h1>

      <nav className="flex space-x-4 mb-6 border-b">
        {modules.map((mod) => (
          <button
            key={mod.id}
            className={`pb-2 ${
              mod.id === activeModule ? "border-b-4 border-blue-600 font-bold" : "text-gray-600"
            }`}
            onClick={() => setActiveModule(mod.id)}
          >
            {mod.title}
          </button>
        ))}
      </nav>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">📘 Teoria</h2>
        <div className="prose max-w-none">{currentModule.theory}</div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">🧪 Laboratorio guidato</h2>
        <div className="prose max-w-none">{currentModule.lab}</div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">🧠 Quiz</h2>
        <Quiz quiz={currentModule.quiz} />
      </section>
    </div>
  );
}
