from django.http import JsonResponse, HttpResponseNotFound
from django.views.decorators.csrf import csrf_exempt
import json


# In-memory storage
NOTES = []
note_id_counter = 1


def get_next_id():
    global note_id_counter
    note_id = note_id_counter
    note_id_counter += 1
    return note_id


def get_note_helper(note_id):
    return [n for n in NOTES if n["id"] == note_id][0]


@csrf_exempt
def create_note(request):
    if request.method == "POST":
        data = json.loads(request.body)
        new_note = {
            "id": get_next_id(),
            "title": data.get("title", ""),
            "content": data.get("content", ""),
        }
        NOTES.append(new_note)
        return JsonResponse(new_note, status=201)


@csrf_exempt
def list_notes(request):
    if request.method == "GET":
        return JsonResponse(NOTES, safe=False)


@csrf_exempt
def get_note(request, note_id):
    note = get_note_helper(note_id)
    if not note:
        return HttpResponseNotFound("Note not found", status=404)
    return JsonResponse(note)


@csrf_exempt
def update_note(request, note_id):
    if request.method == "PUT":
        note = get_note_helper(note_id)
        if not note:
            return HttpResponseNotFound("Note not found")
        data = json.loads(request.body)
        note["title"] = data.get("title", note["title"])
        note["content"] = data.get("content", note["content"])
        return JsonResponse(note)


@csrf_exempt
def delete_note(request, note_id):
    global NOTES
    if request.method == "DELETE":
        note = get_note_helper(note_id)

        if not note:
            return HttpResponseNotFound("Note not found")

        # create and update the note global variable with
        # other objects that are not the one being deleted
        NOTES = [n for n in NOTES if n["id"] != note_id]
        return JsonResponse({"message": "Note deleted"})
