from django.urls import path
from core import views

urlpatterns = [
    path("notes", views.create_note),
    path("notes/", views.list_notes),
    path("notes/<int:note_id>", views.get_note),
    path("notes/<int:note_id>/", views.get_note),
    path("notes/<int:note_id>/update", views.update_note),
    path("notes/<int:note_id>/delete", views.delete_note),
]
