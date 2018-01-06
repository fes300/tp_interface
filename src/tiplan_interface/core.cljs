(ns tiplan-interface.core
  (:require [om.next :as om]
            [goog.dom :as gdom]
            [list-example.reconciler :refer [reconciler]]
            [list-example.core :refer [RootView]]))

(enable-console-print!)

(om/add-root! reconciler
  RootView (gdom/getElement "app"))
