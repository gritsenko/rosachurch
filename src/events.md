---
title: События
layout: layout.njk
---

# Все события церкви "Роса"

Здесь вы найдете информацию о всех предстоящих и прошедших событиях нашей церкви.

## Предстоящие события

{%- set eventList = collections.events | sort(attribute="data.date") | reverse -%}
{%- for event in eventList -%}

### {{ event.data.title }}
**Дата:** {{ event.data.date | date }}  
**Описание:** {{ event.data.description }}

[Подробнее →]({{ event.url }})

---

{%- endfor -%}
