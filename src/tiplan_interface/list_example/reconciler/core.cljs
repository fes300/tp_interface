(ns list-example.reconciler
  (:require [om.next :as om]
            [list-example.reconciler.read :refer [read]]
            [list-example.reconciler.mutate :refer [mutate]]))

(def init-data
  {:list/one [{:name "John" :points 0}
              {:name "Mary" :points 0}
              {:name "Bob"  :points 0}]
   :list/two [{:name "Mary" :points 0 :age 27}
              {:name "Gwen" :points 0}
              {:name "Jeff" :points 0}]})

(def reconciler
  (om/reconciler
    {:state  init-data
     :parser (om/parser {:read read :mutate mutate})}))
